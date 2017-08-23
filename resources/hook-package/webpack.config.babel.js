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

const webpackConfig = {
  entry: path.resolve(__dirname, 'hook.js'),
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'hook',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        include: [ __dirname ],
        use: [ 'babel-loader' ]
      }
    ]
  }
};

export default webpackConfig;
