/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import executable from 'rollup-plugin-executable';
import autoExternal from 'rollup-plugin-auto-external';

export default {
  input: 'src/index.js',
  plugins: [
    executable(),
    autoExternal()
  ],
  output: [{file: 'bin/no-unstaged.js', format: 'cjs', sourcemap: true, banner: '#!/usr/bin/env node'}]
};
