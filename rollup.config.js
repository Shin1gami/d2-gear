import {readdirSync} from 'fs';
import {basename, resolve} from 'path';

import commonjs from 'rollup-plugin-commonjs';
import VuePlugin from 'rollup-plugin-vue';
import clear from 'rollup-plugin-clear';
import uglify from "rollup-plugin-uglify-es";

const PATH_SFC = resolve(__dirname, 'pages');
const PATH_PAGES = resolve(__dirname, 'public/pages/');

let entryMap = {};
readdirSync(PATH_SFC).forEach(file => {
    entryMap[basename(file, '.vue')] = resolve(PATH_SFC, file);
});

export default {
    input: entryMap,
    output: {
        dir: PATH_PAGES,
        entryFileNames: '[name].js',
        format: 'esm',
        exports: 'named',
        sourcemap: false
    },
    plugins: [
        clear({
            targets: [
                PATH_PAGES
            ],
            watch: true
        }),
        commonjs(),
        VuePlugin({
            style: {
                postcssCleanOptions: {disabled: true}
            },
            template: {
                isProduction: true,
                //optimizeSSR: true
            }
        }),
        uglify({
            sourceMap: false
        })
    ]
}