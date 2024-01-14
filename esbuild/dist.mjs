import * as esbuild from "esbuild";

const result = await esbuild.build({
  entryPoints: ["src/**/*.ts"],
  bundle: false,
  sourcemap: true,
  target: ["node12"],
  outdir: "dist/",
  metafile: true,
});

console.log(await esbuild.analyzeMetafile(result.metafile));