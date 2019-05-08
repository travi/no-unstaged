/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import executable from 'rollup-plugin-executable';
import autoExternal from 'rollup-plugin-auto-external';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  plugins: [
    executable(),
    autoExternal(),
    babel({
      babelrc: false,
      externalHelpers: true,
      exclude: ['./node_modules/**'],
      presets: [['@travi', {targets: {node: 8}, react: true}]]
    })
  ],
  output: [{file: 'bin/no-unstaged.js', format: 'cjs', sourcemap: true, banner: '#!/usr/bin/env node'}]
};
