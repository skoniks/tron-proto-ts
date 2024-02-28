(async () => {
  const { globbySync } = await import('globby');
  const { rimrafSync } = await import('rimraf');
  const patterns = ['proto/*', '!proto/index.ts', '!proto/rollup.d.ts'];
  const paths = globbySync(patterns, { onlyFiles: false });
  for (const path of paths) rimrafSync(path);
})();
