const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/popup.js', 'src/content.js', 'src/background.js', 'src/injectScript.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: 'dist',
  target: ['es2020'],
  format: 'iife',
}).catch(() => process.exit(1));