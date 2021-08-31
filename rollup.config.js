import sucrase from "@rollup/plugin-sucrase";
import resolve from "@rollup/plugin-node-resolve";
import inject from "@rollup/plugin-inject";
import externals from "rollup-plugin-node-externals";
import run from "@rollup/plugin-run";
import { resolve as resolvePath } from "path";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    externals(),
    resolve({
      extensions: [".js", ".ts"],
      mainFields: ["module", "jsnext:main", "main"],
    }),
    sucrase({
      exclude: ["node_modules/**"],
      transforms: ["typescript", "jsx"],
      production: true,
    }),
    inject({
      React: [resolvePath(process.cwd(), "src", "react.js"), "*"],
    }),
    run(),
  ],
};
