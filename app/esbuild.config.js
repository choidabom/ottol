import * as esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/**/*.ts"],
  outdir: "dist",
  bundle: true , target: "node20",
  platform: "node",
  bundle: false,
  minify: false,
  sourcemap: false,
  format: "esm",
  plugins: [],
})
