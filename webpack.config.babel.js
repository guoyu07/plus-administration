/*
|--------------------------------------------------------
| ThinkSNS+ 后台编译配置文件
|--------------------------------------------------------
|
| 配置文件使用 ES6 语法配置，这样能保证整个文目的语法统一性
| 修改配置文件请使用 ES6 语法对 webpack 进行配置。
|
|
*/

import path from 'path';
import webpack from 'webpack';

// 各项资源地址定义
const assetsRoot = path.resolve(__dirname, 'resources', 'assets');
const buildAssetsRoot = path.join(__dirname, 'assets/');

const webpackConfig = {
  entry: {
    hook: path.resolve(assetsRoot, 'hook.js')
  },
  output: {
    path: buildAssetsRoot,
    filename: '[name].js'
  }
};

export default webpackConfig;
