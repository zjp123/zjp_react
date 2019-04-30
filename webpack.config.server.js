const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'serverIndex.js',
		publicPath:'/static/',//后面的斜杠也要加上
        libraryTarget: 'commonjs2'
	},
	// entry: autoWebPlugin.entry({
	// 	base: path.resolve(__dirname, './src/base/base.js'),
		
	// }),
	entry:{
		serverIndex: path.resolve(__dirname, './server/server_entry.js'),
	},
	resolve: {
		// 先尝试 ts，tsx 后缀的 TypeScript 源码文件
		extensions: ['.js', '.json', '.jsx', '.css', '.less'],
        modules:['./src/','./server/', './node_modules']
	},
	module: {
		rules: [
			{
			  // 命中 JavaScript 文件
			  test: /\.(js|jsx|mjs)$/,
			  
			  enforce: 'pre',
  
			  // 用 babel-loader 转换 JavaScript 文件
			  // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
			  // use: ['babel-loader'],
			  use:['babel-loader'],
			  // 只命中src目录里的js文件，加快 Webpack 搜索速度
			//   include: [path.resolve(__dirname, './src'),path.resolve(__dirname, './server')],
			  exclude:[
				  path.resolve(__dirname, './node_modules'),
			
			  ]
			},
			{
				test: require.resolve('jquery'),
				use: [{
				   loader: 'expose-loader',
				   options: 'jQuery'
				},{
				   loader: 'expose-loader',
				   options: '$'
				}]
			 },
			{
			  // 命中 SCSS 文件
			  test: /\.css$/,
		
			  use: [
			      'isomorphic-style-loader',
			      'css-loader',
			      'postcss-loader',
			      
			  ],
			// use: [
			// 	{
			// 		loader: 'style-loader',
				
			// 	},{
			// 		loader: 'css-loader',
			// 		options:  { javascriptEnabled: true }
			// 	},{
			// 		loader: 'postcss-loader',
				
			// 	},{
			// 		loader: 'less-loader',
				
			// 	}
			// ],

			  //开发时用上面的，上线时用下面的

			//   loader: ['css-loader', 'postcss-loader'],
			  // 排除 node_modules 目录下的文件
			//  include: path.resolve(__dirname, './src'), //antd 时要关闭
              
			//   exclude: path.resolve(__dirname, './node_modules'),  //antd 时要关闭a
			},
			{
				// 命中 SCSS 文件
				test: /\.less$/,
		  
				use: [
					'isomorphic-style-loader',
					'css-loader',
					'postcss-loader',
					'less-loader',
                ],
			// //   loader: [ 'css-loader', 'postcss-loader', 'less-loader'],
                
			},
			{
			  // 对非文本文件采用 file-loader 加载
			  test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf|ico)$/,
			  use: [{
				  loader: 'url-loader',
				  options: {
					// 30KB 以下的文件采用 url-loader
					name: "[name]-[hash:8].[ext]",
					limit: 1024 * 30,
					// 否则采用 file-loader，默认值就是 file-loader 
					fallback: 'file-loader',
					 query: {
						  
						  name: 'imgs/[name].[ext]',
					  },
					  outputPath: "imgs/"
  
				  }
			  }],
			  include: path.resolve(__dirname, './src'),
			  exclude:[
				  path.resolve(__dirname, './node_modules'),
			
			  ]
  
			},
		  ],
		//   noParse: /jquery|chartjs/,
	}

    //构建出的代码生成 Source Map 以方便调试
    // devtool: 'hidden-source-map',
	// watchOptions: {
	// 	ignored: /node_modules/,
	// },		
};




