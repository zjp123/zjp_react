const path = require('path')
const webpack = require('webpack')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const { AutoWebPlugin } = require('web-webpack-plugin');
// const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HappyPack = require('happypack');


// 使用本文的主角 AutoWebPlugin，自动寻找 pages 目录下的所有目录，把每一个目录看成一个单页应用
const autoWebPlugin = new AutoWebPlugin('../src/pages', {
    template: '../src/static/template.html', // HTML 模版文件所在的文件路径
    postEntrys: ['../src/static/common.css'],// 所有页面都依赖这份通用的 CSS 样式文件
    // 提取出所有页面公共的代码
    commonsChunk: {
      name: 'common',// 提取出公共代码 Chunk 的名称
    },
  });
module.exports = {
     // AutoWebPlugin 会找为寻找到的所有单页应用，生成对应的入口配置，
    // autoWebPlugin.entry 方法可以获取到生成入口配置
    entry: autoWebPlugin.entry({
        // 这里可以加入你额外需要的 Chunk 入口
        base: './base.js'
    }),
    //entry: {'app': '../src/app.js', 'user': '../src/user.js'},
    output: {

        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: '[name]_[chunkhash:8].js',
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './dist'),
        publicPath:'/public/',
         // 生成的 Source Map 文件名称
        sourceMapFilename: '[file].map',
        // 浏览器开发者工具里显示的源码模块名称
        devtoolModuleFilenameTemplate: 'webpack:///[resource-path]'
    },
    module: {
        rules: [
          {
            // 命中 JavaScript 文件
            test: /\.(js|jsx|mjs)$/,
            
            enforce: 'pre',

            // 用 babel-loader 转换 JavaScript 文件
            // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
            use: ['babel-loader?cacheDirectory'],
            // 只命中src目录里的js文件，加快 Webpack 搜索速度
            include: path.resolve(__dirname, 'src'),
            exclude:[
                path.resolve(__dirname, 'node_modules'),
          
            ]
          },
          {
            // 命中 SCSS 文件
            test: /\.(less|css)$/,
            // 使用一组 Loader 去处理 SCSS 文件。
            // 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
            //use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
            use: ExtractTextPlugin.extract({
                use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'] // 压缩 CSS 代码
            }),
            // 排除 node_modules 目录下的文件
            exclude: path.resolve(__dirname, 'node_modules'),
          },
          {
            // 对非文本文件采用 file-loader 加载
            test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
            use: [{
                loader: 'url-loader',
                options: {
                  // 30KB 以下的文件采用 url-loader
                  limit: 1024 * 30,
                  // 否则采用 file-loader，默认值就是 file-loader 
                  fallback: 'file-loader',
                }
            }],
            include: path.resolve(__dirname, 'src'),
            exclude:[
                path.resolve(__dirname, 'node_modules'),
          
            ]

          },
        ],
        noParse: /jquery|chartjs/,
    },
    resolve:{
        extensions: ['.js', '.json', '.jsx', '.css'],
        modules:['../src/', 'node_modules']
    },
    plugins: [
        // 所有页面都会用到的公共代码提取到 common 代码块中
        // new CommonsChunkPlugin({
        //   name: 'common',
        //   chunks: ['app', 'user']
        // }),
        autoWebPlugin,
         // 为了从 common 中提取出 base 也包含的部分
        new CommonsChunkPlugin({
            // 从 common 和 base 两个现成的 Chunk 中提取公共的部分
            chunks: ['common', 'base'],
            // 把公共的部分放到 base 中
            name: 'base'
        }),
        new CleanWebpackPlugin(['../dist']),
        // new HtmlWebpackPlugin({
        //     title: 'Hot Module Replacement'
        // }),
        // new HotModuleReplacementPlugin(),
        new NamedModulesPlugin(),
        new ExtractTextPlugin({
            filename: `[name]_[contenthash:8].css`,// 给输出的 CSS 文件名称加上 hash 值
        }),
        new DefinePlugin({
            // 定义 NODE_ENV 环境变量为 production 去除 react 代码中的开发时才需要的部分
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
         // 压缩输出的 JS 代码
        new UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
            // 在UglifyJs删除没有用到的代码时不输出警告
            warnings: false,
            // 删除所有的 `console` 语句，可以兼容ie浏览器
            drop_console: true,
            // 内嵌定义了但是只用到一次的变量
            collapse_vars: true,
            // 提取出出现多次但是没有定义成变量去引用的静态值
            reduce_vars: true,
            }
        }),
    ],
    // devServer:{
    //     // proxy: { // 代理到后端服务接口
    //     //     '/api': 'http://localhost:3000'
    //     // },
    //     //contentBase: path.join(__dirname, 'public'), // 配置 DevServer HTTP 服务器的文件根目录
    //     publicPath: '/public/',
    //     compress: true, // 是否开启 gzip 压缩
    //     hot:true,
    //     open:true,
    //     historyApiFallback: {
    //         // 使用正则匹配命中路由
    //         rewrites: [
    //           // /user 开头的都返回 user.html
    //           { from: /^\/user/, to: '/user.html' },
    //           { from: /^\/app/, to: '/index.html' },
    //           // 其它的都返回 index.html
    //           { from: /./, to: '/index.html' },
    //         ]
    //     }
    // },
    //构建出的代码生成 Source Map 以方便调试
    devtool: 'hidden-source-map',
   
    externals: {
        // 把导入语句里的 jquery 替换成运行环境里的全局变量 jQuery
        jquery: 'jQuery'
    },
    // 输出文件性能检查配置
    performance: { 
        hints: 'warning', // 有性能问题时输出警告
        hints: 'error', // 有性能问题时输出错误
        hints: false, // 关闭性能检查
        maxAssetSize: 200000, // 最大文件大小 (单位 bytes)
        maxEntrypointSize: 400000, // 最大入口文件大小 (单位 bytes)
        assetFilter: function(assetFilename) { // 过滤要检查的文件
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    context: __dirname, // Webpack 使用的根目录，string 类型必须是绝对路径
    target: 'web', // 浏览器，默认
    watchOptions: {
        // 4-5使用自动刷新：不监听的 node_modules 目录下的文件
        ignored: /node_modules/,
    }
}