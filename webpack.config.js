const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require("imagemin-webpack-plugin").default
// const { AutoWebPlugin } = require('web-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
// const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
// const autoWebPlugin = new AutoWebPlugin(path.resolve(__dirname, './src/pages'), {
// 	template: path.resolve(__dirname, './src/template.html'),
// 	// favicon: path.resolve(__dirname, './src/imgs/favicon.ico'),
// 	postEntrys: ['./src/base/base.css'],// 所有页面都依赖这份通用的 CSS 样式文件
// 	commonsChunk: {
// 		name :'zjp',//提取出公共代码 Chunk 的名称
// 	}		
// });

module.exports = {
	// mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
		chunkFilename : '[name].js',
		publicPath:'',//后面的斜杠也要加上
         // 生成的 Source Map 文件名称
        // sourceMapFilename: '[file].map',
        // 浏览器开发者工具里显示的源码模块名称
        devtoolModuleFilenameTemplate: 'zjp'
	},
	// entry: autoWebPlugin.entry({
	// 	base: path.resolve(__dirname, './src/base/base.js'),
		
	// }),
	entry:{
		index: path.resolve(__dirname, './src/index.js'),
		base: path.resolve(__dirname, './src/base/base.js')
	},
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
		extensions: ['.js', '.json', '.jsx', '.css', '.less'],
        modules:['./src/', './node_modules']
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
			  use:['babel-loader?cacheDirectory'],
			  // 只命中src目录里的js文件，加快 Webpack 搜索速度
			  include: path.resolve(__dirname, './src'),
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
			  test: /\.(less|css)$/,
		
			  use: [
			      'style-loader',
			      'css-loader',
			      'postcss-loader',
			      'less-loader',
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

			//   loader: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
			  // 排除 node_modules 目录下的文件
			//  include: path.resolve(__dirname, './src'), //antd 时要关闭
              
			//   exclude: path.resolve(__dirname, './node_modules'),  //antd 时要关闭a
			},
			{
			  // 对非文本文件采用 file-loader 加载
			  test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf|ico)$/,
			  use: [{
				  loader: 'url-loader',
				  options: {
					// 30KB 以下的文件采用 url-loader
					limit: 1024 * 30,
					// 否则采用 file-loader，默认值就是 file-loader 
					fallback: 'file-loader',
					 query: {
						  
						  name: 'imgs/[name].[ext]',
					  }
  
				  }
			  }],
			  include: path.resolve(__dirname, './src'),
			  exclude:[
				  path.resolve(__dirname, './node_modules'),
			
			  ]
  
			},
		  ],
		//   noParse: /jquery|chartjs/,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}),
		new CleanWebpackPlugin(
            ['dist']
		),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ImageminPlugin(
			{ 
				disable: process.env.NODE_ENV !== 'production', 
				test: /\.(jpe?g|png|gif|svg)$/i 
			}
		),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'window.$': 'jquery',
		}),
		new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/template.html'),
			// inject: 'head',
			favicon: path.resolve(__dirname, './src/imgs/favicon.ico'),
			// chunks: ['index', 'base'],
			title:"hello zjp"
        })
		// autoWebPlugin,
	],
	 devServer:{
        // proxy: { // 代理到后端服务接口
        //     '/api': 'http://localhost:3000'
        // },
		// contentBase: path.resolve(__dirname, '/public/'), // 配置 DevServer HTTP 服务器的文件根目录
		contentBase: path.resolve(__dirname),
        host:'0.0.0.0',
        // port:'8080',
        publicPath: '',
		// compress: true, // 是否开启 gzip 压缩
		inline:true,
        // open:true,
		hot:true,
		historyApiFallback:true,
		proxy: {
            '/api': {
				target: 'http://172.16.68.149:8888',
				pathRewrite: {
					'^/api': '/' //这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
						// 比如我要调用'http://0.0:300/user/add'，直接写‘/api/user/add’即可 代理后地址栏显示/
				},
                secure: false, // 接受 运行在 https 上的服务
                changeOrigin: true
            }
        }
        // historyApiFallback: {
        //     // 使用正则匹配命中路由
        //     rewrites: [
        //       // /user 开头的都返回 user.html
		// 		{ from: /^\/home/, to: '/home.html' },
		// 		{ from: /^\/login/, to: '/login.html' },
		// 		{ from: /^\/signup/, to: '/signup.html' },
		// 		// 其它的都返回 index.html
		// 		{ from: /./, to: '/index.html' },
        //     ]
		// }
		
	
    },
    //构建出的代码生成 Source Map 以方便调试
	devtool: 'cheap-module-eval-source-map',
	watchOptions: {
		ignored: /node_modules/,
	},		
};
