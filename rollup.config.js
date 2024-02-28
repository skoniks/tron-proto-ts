const { dts } = require('rollup-plugin-dts');
const cleanup = require('rollup-plugin-cleanup');

module.exports = [
  {
    input: './proto/index.d.ts',
    output: [{ file: './proto/types.d.ts' }],
    plugins: [cleanup({ comments: 'none', extensions: ['ts'] }), dts()],
  },
];
