import * as esbuild from "esbuild";
import { glob } from "glob";

const bundleFiles = await glob('docs-src/**/*.bundle.{ts,js}');

let bundle = await esbuild.context({
  entryPoints: bundleFiles,
  entryNames: '[dir]/[name]',
  outdir: 'docs/',
  outbase: 'docs-src/',
  bundle: true,
  sourcemap: true,
  target: ["chrome100"],
  format: "esm",
  lineLimit: 80,
  minify: true,
  logLevel: "info",
  color: true,
});

await bundle.watch();

const entryPoints = await glob('docs-src/**/*.{ts,tsx,js,jsx,ttf}',
  {
    ignore: ['docs-src/**/*.bundle.{ts,js}']
  }
)

let ctx = await esbuild.context({
  entryPoints: entryPoints,
  entryNames: '[dir]/[name]',
  outdir: 'docs/',
  outbase: 'docs-src/',
  bundle: true,
  sourcemap: true,
  target: ["chrome100"],
  format: "esm",
  lineLimit: 80,
  minify: true,
  logLevel: "info",
  color: true,
  loader: {
    '.ttf': 'copy',
  },
})

await ctx.watch();
console.log('watching docs-src/ for changes...');

let { host, port } = await ctx.serve({
  servedir: 'docs',
})
console.log(`serving docs on http://${host}:${port}`)