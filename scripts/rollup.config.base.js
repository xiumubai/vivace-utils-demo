// 安装以下 npm 包
// npm install -D @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-alias @rollup/plugin-replace @rollup/plugin-eslint @rollup/plugin-babel rollup-plugin-terser rollup-plugin-clear @rollup/plugin-json
import { nodeResolve } from '@rollup/plugin-node-resolve' // 解析 node_modules 中的模块
import commonjs from '@rollup/plugin-commonjs' // cjs => esm
import alias from '@rollup/plugin-alias' // alias 和 reslove 功能
import replace from '@rollup/plugin-replace'
import eslint from '@rollup/plugin-eslint'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import clear from 'rollup-plugin-clear'
import json from '@rollup/plugin-json' // 支持在源码中直接引入json文件，不影响下面的
import { name, version, author } from '../package.json'

const pkgName = 'viavcedemo'
// 打包处理的文件，添加的备注信息
const banner =
  '/*!\n' +
  ` * ${name} v${version}\n` +
  ` * (c) 2022-${new Date().getFullYear()} ${author}\n` +
  ' * Released under the MIT License.\n' +
  ' */'

export default {
  input: 'src/index.js',
  // 同时打包多种规范的产物
  output: [
    {
      file: `dist/${pkgName}.umd.js`,
      format: 'umd',
      name: pkgName,
      banner
    },
    {
      file: `dist/${pkgName}.umd.min.js`,
      format: 'umd',
      name: pkgName,
      banner,
      plugins: [terser()]
    },
    {
      file: `dist/${pkgName}.cjs.js`,
      format: 'cjs',
      name: pkgName,
      banner,
      plugins: [terser()]
    },
    {
      file: `dist/${pkgName}.esm.js`,
      format: 'es',
      name: pkgName,
      banner,
      plugins: [terser()]
    },
    {
      file: `dist/${pkgName}.js`,
      format: 'iife',
      name: pkgName,
      banner,
      plugins: [terser()]
    }
  ],
  // 注意 plugin 的使用顺序
  plugins: [
    json(),
    clear({
      targets: ['dist']
    }),
    alias(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      preventAssignment: true
    }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    eslint({
      throwOnError: true, // 抛出异常并阻止打包
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    babel({ babelHelpers: 'bundled' })
  ]
}
