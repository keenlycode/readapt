import * as esbuild from 'esbuild';

const ctx = await esbuild.context({
  entryPoints: ['test-src/**/*'],
  bundle: true,
  sourcemap: true,
  target: ['chrome100'],
  outdir: 'test',
  loader: {
    '.html': 'copy'
  }
})

let { host, port } = await ctx.serve();
console.log(`http://${host}:${port}`);