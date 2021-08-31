const mjml2html = require("mjml");
const http = require("http");
const { html: htmlBeautify } = require("js-beautify");

import { writeFile, mkdir, rmdir } from "fs/promises";
import { join as pathJoin } from "path";
import { EventRegistered } from "./pages/event-register";
import { EventReminder } from "./pages/event-reminder";
import { EventUpdated } from "./pages/event-updated";
import { EventInviteSpeaker } from "./pages/invite-speaker";
import { SpeakerReminder } from "./pages/speaker-reminder";

const OUT_DIR = pathJoin(".", "out");
function createListing() {
  return routes.map(({ path }) => `<a href="${path}">${path}</a>`).join("\n");
}
async function build() {
  await rmdir(OUT_DIR, { recursive: true });

  try {
    await mkdir(OUT_DIR, {});
  } catch {}

  routes.forEach(async ({ page: Page, path }) => {
    await writeFile(
      pathJoin(OUT_DIR, `${path}.html`),
      htmlBeautify(mjml2html(<Page />).html)
    );
  });

  await writeFile(pathJoin(OUT_DIR, "index.html"), createListing());
}

async function devServer() {
  const server = http.createServer();
  server.on("request", (req, res) => {
    const route = routes.find(({ path }) => path === req.url);
    if (!route) {
      res.end(createListing());
      return;
    }

    const Page = route.page;
    res.end(htmlBeautify(mjml2html(<Page />).html));
  });

  server.listen(5000, () => {
    console.log(`> Running on http://localhost:5000`);
  });
}

function start() {
  const dev = process.env.ROLLUP_WATCH === "true";
  if (dev) {
    devServer();
  } else {
    build();
  }
}

const routes = [
  {
    path: "/event-register",
    page: EventRegistered,
  },
  {
    path: "/event-reminder",
    page: EventReminder,
  },
  { path: "/event-updated", page: EventUpdated },
  {
    path: "/invite-speaker",
    page: EventInviteSpeaker,
  },
  {
    path: "/speaker-reminder",
    page: SpeakerReminder,
  },
];

start();
