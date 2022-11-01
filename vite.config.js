import * as path from "path";
import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

const pathTovHTML = path.resolve(process.cwd(), "src", "react.js");

export default defineConfig({
  optimizeDeps: { disabled: true },
  esbuild: { jsxInject: `import * as React from '${pathTovHTML}';` },
  plugins: [
    ...VitePluginNode({
      adapter: async ({ app, req, res }) => {
        const response = await app(req.url.slice(1));
        res.end(response);
      },
      // tell the plugin where is your project entry
      appPath: "./src/index.js",

      // Optional, default: 'viteNodeApp'
      // the name of named export of you app from the appPath file
      exportName: "viteNodeApp",
    }),
  ],
});
