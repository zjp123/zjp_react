// var extensions = ['.css', '.less'];
// for (let i = 0, len = extensions.length; i < len; i++) {
//     //设置不同类型的文件加载方式
//     require.extensions[extensions[i]] = function (module,filename) {
//         //对一些处理,比如:处理引用的文件内容,任何赋值给module.exports
//         module.exports = 1;
//     };
// }
import express from 'express'
// import bodyParser from 'body-parser'
// import cookieParser from 'cookie-parser'

// require.extensions['.png'] = () => {}
import csshook from 'css-modules-require-hook/preset'
import assetHook from 'asset-require-hook'

// require('css-modules-require-hook')({
//   generateScopedName: '[name]__[local]___[hash:base64:5]'
// });

// reqyure
csshook({
    extensions: ['.css', '.less'],
    generateScopedName: '[name]__[local]___[hash:base64:5]'
})
assetHook({
    extensions: ["svg", "css", "less", "jpg", "png", "gif"],
    limit: 8000
})

// require('asset-require-hook')({
//     extensions: ['png'],
//     limit: 8000
// })
// require('asset-require-hook')({
//     extensions: ['ttf','woff','svg','eot','woff2'],
//     limit: 10000
// });
import {renderToString,renderToNodeStream} from 'react-dom/server'
import React from 'react'
import App from '../src/app'
import {StaticRouter} from 'react-router-dom'

import staticPath from '../dist/asset-manifest.json'
// import axios from 'axios'
import {Provider} from 'mobx-react';
import stores from '../src/store/state'
// console.log(staticPath)




const app = express()
// work with express
const server = require('http').Server(app)



// const userRouter = require('./api')
var path = require('path');
// app.use(cookieParser())
// app.use(bodyParser.json())
// app.use('/api',userRouter)

app.use(function(req,res,next){
    console.log('aa', req.url)

	// for(let key in req)
	// console.log(req.domain)
	// console.log(req.baseUrl)
	// console.log(req.originalUrl)
	// console.log(Object.keys(req))
	if(req.url.startsWith('http://172.16.68.161:8888')){
            console.log('aa', req.url)
			return next()
	}
	// return res.sendFile(path.resolve('build/index.html'));
	// console.log(require(''))
	const context = {}
	
	const markup = renderToString(
        
		(<Provider {...stores}>
			<StaticRouter
				location={req.url}
		    context={context}
	   >
				<App></App>
			</StaticRouter>
		</Provider>)
	)
// 	res.write(`<!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//     <meta name="theme-color" content="#000000">
//     <link rel="stylesheet" href="/${staticPath['main.css']}">
//     <meta name="description" content="React开发招聘 App" />
//     <meta name="keywords" content="React,Redux,SSR,React-router,Socket.io" />
//     <meta name="author" content="Imooc" >
//     <title>Redux+React Router+Node.js全栈开发聊天App</title>

//   </head>
//   <body>
//     <noscript>
//       You need to enable JavaScript to run this app.
//     </noscript>
//     <div id="root">`)
	// console.log('xx1')
	// markupStream.pipe(res, { end: false });
 //  markupStream.on('end', () => {
	// 	console.log('xx')
 //    res.write(`
	// 		</div>
	// 		    <script src="/${staticPath['main.js']}"></script>
	// 		  </body>
	// 		</html>
 //    `);
 //    res.end();
 //  });
	
	const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <!-- link rel="stylesheet" href="/${staticPath['base.css']}" -->
    <!-- link rel="stylesheet" href="/${staticPath['index.css']}" -->
    <meta name="description" content="React开发招聘 App" />
    <meta name="keywords" content="React,Redux,SSR,React-router,Socket.io" />
    <meta name="author" content="Imooc" >
    <title>Redux+React Router+Node.js全栈开发聊天App</title>

  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root">${markup}</div>
    <!-- script src="/${staticPath['runtime.js']}"></script>
    <script src="/${staticPath['base.js']}"></script>
    <script src="/${staticPath['index.js']}"></script -->
  </body>
</html>

	`
	return res.send(page)
})
// app.use(express.static('build'))
app.use('/', express.static(path.resolve('dist')))
server.listen(9093,function(){
	console.log('Node app start at port 9093')
})