import buble from 'rollup-plugin-buble';
import path from 'path';
import {uglify} from 'rollup-plugin-uglify';

import {main} from './package.json';

export default {
	input: 'src/index.js',
	output: {
		file: main,
		format: 'umd',
		name: path.basename(main, path.extname(main)),
	},
	plugins: [
		buble(),
		uglify(),
	],
};
