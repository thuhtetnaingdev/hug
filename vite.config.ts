import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  plugins: [
    ...VitePluginNode({
      adapter: "koa",
      appPath: "./src/app.ts",
      tsCompiler: "swc",
      appName: "hug",
      exportName: "hug",
    }),
  ],
  server: {
    port: 3000,
  },
});
