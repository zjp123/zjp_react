const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { AutoWebPlugin } = require('web-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoWebPlugin = new AutoWebPlugin('./src/pages', {
	template: './src/static/template.html',
});

module.exports = {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../dist'),
        filename: '[chunkhash].js',
        publicPath:'/public/',
        
	},
	entry: autoWebPlugin.entry({
		base: './src/static/base.js',
	}),
	optimization: {
		runtimeChunk: {
			name: 'runtime',
		},
		splitChunks: {
			minSize: 0,
			cacheGroups: {
				base: {
					chunks: 'all',
					name: 'base',
					test: 'base',
				},
				common: {
					chunks: 'all',
					name: 'common',
					minChunks: 2,
				},
			},
		},
	},
	resolve: {
		// 先尝试 ts，tsx 后缀的 TypeScript 源码文件
        extensions: ['.js', '.json', '.jsx', '.css'],
	},
	module: {
		//  rules: [
		// 	{
		// 		test: /\.css$/,
		// 		loader: [MiniCssExtractPlugin.loader, 'css-loader'],
		// 	},
		// 	{
		// 		test: /\.tsx?$/,
		// 		loader: ['ts-loader'],
		// 	},
        // ],
        
        rules: [
            {
              // 命中 JavaScript 文件
              test: /\.(js|jsx|mjs)$/,
              
              enforce: 'pre',
  
              // 用 babel-loader 转换 JavaScript 文件
              // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
              // use: ['babel-loader'],
              use:['babel-loader?cacheDirectory'],
              // 只命中src目录里的js文件，加快 Webpack 搜索速度
              include: path.resolve(__dirname, '../src'),
              exclude:[
                  path.resolve(__dirname, '../node_modules'),
            
              ]
            },
            {
              // 命中 SCSS 文件
              test: /\.(less|css)$/,
              // 使用一组 Loader 去处理 SCSS 文件。
              // 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
             // use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
          
            //   use: [
            //       'style-loader',
            //       'css-loader',
            //       'postcss-loader',
            //       'less-loader',
            //   ],
              loader: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
              // 排除 node_modules 目录下的文件
              include: path.resolve(__dirname, '../src'),
  
              exclude: path.resolve(__dirname, '../node_modules'),
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
                     query: {
                          
                          name: 'images/[name].[ext]',
                      }
  
                  }
              }],
              include: path.resolve(__dirname, '../src'),
              exclude:[
                  path.resolve(__dirname, '../node_modules'),
            
              ]
  
            },
          ],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
        }),
        new CleanWebpackPlugin(
            ['dist'],
            {
                root: path.join(__dirname, '../'),       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        ),
		autoWebPlugin,
	],
};