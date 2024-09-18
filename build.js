const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/popup.ts', 'src/content.ts', 'src/background.ts', 'src/injectScript.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: 'dist',
  target: ['es2020'],
  format: 'iife',
}).catch(() => process.exit(1));