import * as esbuild from "esbuild";
import { glob } from "glob";

const entryPoints = await glob('docs-src/**/*.{ts,tsx,js,jsx}',
  {
    ignore: ['docs-src/**/_*'],
  }
)

let ctx = await esbuild.context({
  entryPoints: entryPoints,
  entryNames: '[dir]/[name]',
  outdir: 'docs/',
  bundle: true,
  sourcemap: true,
  target: ["chrome100"],
  format: "esm",
  lineLimit: 80,
  minify: true,
  logLevel: "info",
})

await ctx.watch();
console.log('watching docs-src/ for changes...');

let { host, port } = await ctx.serve({
  servedir: 'docs',
})
console.log(`serving docs on http://${host}:${port}`)