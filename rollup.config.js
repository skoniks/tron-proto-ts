const cleanup = require('rollup-plugin-cleanup');
const { default: dts } = require('rollup-plugin-dts');
const { default: replace } = require('@rollup/plugin-replace');

const replacements = Object.fromEntries([
  ['Uint8Array', 'string'],
  ['export enum ', 'export declare const enum '],
]);

module.exports = [
  {
    input: './proto/index.d.ts',
    output: [{ file: './proto/rollup.d.ts' }],
    plugins: [
      cleanup({ comments: 'none', extensions: ['ts'] }),
      replace({ values: replacements, preventAssignment: true }),
      dts(),
    ],
  },
];
