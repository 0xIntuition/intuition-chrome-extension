const esbuild = require('esbuild');

const watchMode = process.argv.includes('--watch');

const buildOptions = {
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
};

if (watchMode) {
  esbuild.context(buildOptions).then(context => {
    context.watch();
    console.log('Watching for changes...');
  });
} else {
  esbuild.build(buildOptions).catch(() => process.exit(1));
}