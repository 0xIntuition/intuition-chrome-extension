const esbuild = require('esbuild');

esbuild.build({
  entryPoints: [
    'src/popup/index.tsx',
    'src/content.ts',
    'src/background.ts',
    'src/in-page.ts',
  ],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: 'dist',
  target: ['es2020'],
  format: 'esm',
  loader: { '.tsx': 'tsx' },
}).catch(() => process.exit(1));