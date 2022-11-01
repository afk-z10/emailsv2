// @ts-check
import { writeFile, mkdir, rm } from "fs/promises";
import * as path from "path";
import { createElement } from "./react";
import mjml2html from "mjml";
import beautify from "js-beautify";

const pages = /**@type {Record<string,()=>Promise<{default:()=>string}>>} */ (
  import.meta.glob("./pages/*.jsx")
);

const routes = Object.entries(pages).map(([pagePath, importer]) => ({
  path: path.parse(pagePath).name,
  page: importer,
}));

function createListing() {
  return routes
    .map(({ path }) => `<div><a href="${path}">${path}</a></div>`)
    .join("\n");
}

export const viteNodeApp = async (/** @type {string} */ url) => {
  const route = routes.find(({ path }) => path === url);

  if (!route) {
    return createListing();
  }

  const Page = await route.page();

  return beautify.html(mjml2html(createElement(Page.default)).html);
};

async function build() {
  const OUT_DIR = path.join(".", "out");

  await rm(OUT_DIR, { recursive: true, force: true });

  try {
    await mkdir(OUT_DIR, {});
  } catch {}

  routes.forEach(async ({ page, path: pagePath }) => {
    const Page = await page();
    await writeFile(
      path.join(OUT_DIR, `${pagePath}.html`),
      beautify.html(mjml2html(createElement(Page.default)).html)
    );
  });

  await writeFile(path.join(OUT_DIR, "index.html"), createListing());
}

if (import.meta.env.PROD) {
  build();
}
