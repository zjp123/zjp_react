const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { AutoWebPlugin } = require('web-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
// const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const autoWebPlugin = new AutoWebPlugin(path.resolve(__dirname, './src/pages'), {
	template: path.resolve(__dirname, './src/template.html'),
	//postEntrys: ['./src/aa.css']// 所有页面都依赖这份通用的 CSS 样式文件
});

module.exports = {
	// mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
		publicPath:'/public/',
         // 生成的 Source Map 文件名称
        // sourceMapFilename: '[file].map',
        // 浏览器开发者工具里显示的源码模块名称
        devtoolModuleFilenameTemplate: 'zjp'
	},
	entry: autoWebPlugin.entry({
		base: path.resolve(__dirname, './src/base.js'),
		
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
			  use:['babel-loader'],
			  // 只命中src目录里的js文件，加快 Webpack 搜索速度
			  include: path.resolve(__dirname, './src'),
			  exclude:[
				  path.resolve(__dirname, './node_modules'),
			
			  ]
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
			//   loader: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
			  // 排除 node_modules 目录下的文件
			  include: path.resolve(__dirname, './src'),
  
			  exclude: path.resolve(__dirname, './node_modules'),
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
			  include: path.resolve(__dirname, './src'),
			  exclude:[
				  path.resolve(__dirname, './node_modules'),
			
			  ]
  
			},
		  ],
		  //noParse: /jquery|chartjs/,
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
		autoWebPlugin,
	],
	 devServer:{
        // proxy: { // 代理到后端服务接口
        //     '/api': 'http://localhost:3000'
        // },
		//contentBase: path.join(__dirname, 'public'), // 配置 DevServer HTTP 服务器的文件根目录
		contentBase: path.resolve(__dirname),
        host:'0.0.0.0',
        // port:'8080',
        publicPath: '/public/',
		// compress: true, // 是否开启 gzip 压缩
		inline:true,
        // open:true,
        hot:true,
        // historyApiFallback: {
        //     // 使用正则匹配命中路由
        //     rewrites: [
        //       // /user 开头的都返回 user.html
        //       { from: /^\/user/, to: '../src/pages/user/index.js' },
        //       { from: /^\/app/, to: '../src/pages/index/index.js' },
        //       // 其它的都返回 index.html
        //       { from: /./, to: '../src/pages/index/index.js' },
        //     ]
        // }
    },
    //构建出的代码生成 Source Map 以方便调试
    devtool: 'cheap-module-eval-source-map',
};
