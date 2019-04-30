### 步骤
 - vscode 插件 tag Beautify Debugger for Chrome    javaScript(ES6) code snippets  Path Intellisense  React/Redux/react-router Snippets
 - git init npm init 创建github库
 - npm i -D webpack react react-dom
 - create .gitignore
 - create .babelrc
 - npm i -D babel-plugin-transform-runtime
 - npm i -D babel-runtime
 - npm i -D babel-core babel-loader 
 - npm i -D babel-preset-env
 - npm i -D postcss-loader css-loader style-loader
 - npm i -D less-loader less
 - npm i -D url-loader
 - npm i -D react-hot-loader
 - npm install -D webpack-cli
 - npm i -D webpack-dev-server
 - npm install --save-dev postcss-loader autoprefixer
 - npm i -D extract-text-webpack-plugin@next
 - npm i -D web-webpack-plugin
 - npm i -D html-webpack-plugin
 - npm i -D clean-webpack-plugin
 - npm install --save-dev babel-core babel-loader
 - npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
 - npm i -D mini-css-extract-plugin
 - npm i -D imagemin-webpack-plugin 压缩图片
 - npm i -D  webpack-manifest-plugin  打包时生成aset-manifest.json 文件 为了服务端渲染      
 ### 注意事项
 - AutoWebPlugin 的commonsChunk 不与 splitChunks CommonsChunkPlugin 同用？
 - 一、模板页面没有注入css或者js 使用AutoWebPlugin 它的 commonsChunk(common) postEntrys(css) 没有使用CommonsChunkPlugin
 - 二、模板页面注入css和js 使用AutoWebPlugin 它的 commonsChunk(common) 使用 CommonsChunkPlugin
 - 三、模板页面注入css和js 没有使用AutoWebPlugin 它的 commonsChunk(common) 使用 splitChunks
 - publicPath:'/public/', 它决定了页面文件所引用的资源路径 就是说所有页面的资源路径的前面都会被加上 /public/xxxxxx.xx
 - devServer 中的 publicPath: '/aa', 决定了你在浏览器中访问页面时的路径  前面必须是有aa开头 /aa/xxx/xxx
 - 如果splitChunks中配置了runtime配置项，webpack就会打包出一个所有依赖的记录文件就是这个runtime的文件，在页面中一定要把它也引进页面中，要不然js不起作用
 - output 的public的路径名要与devserver中的路径名一致
 - webpack-dev-server 单纯使用它不会出现局部更新 而是全部刷新  要结合webpack-dev-middwire 和webpack-hot-middlire 还要结合nodejs
 - MiniCssExtractPlugin是根据内容的变化来的，所有如果结合使用webpack-dev-server时，css变化并没有使页面刷新，解决办法是 ：结合splitChunks的runtime ,并且在页面中记得要引入runtimejs；或者在rules的配置中把MiniCssExtractPlugin.loader 换成style-loader，这样就不用splitChunks的runtime的配置，也不用在页面中引入runtimejs  ,缺点是不能把css从打包的模块中分离出来，css打包在js中了
 - 注意publicpath的路径配置，如果配置publicpath：‘/public/’ 那么当启动devserver时，要在浏览器启动的域名后面加上public才能访问到资源 比如：http://0.0.0.0:3000/public 不然是找不到资源的
 - Webpack 官方提供了 一个可视化分析工具 Webpack Analyse ( h句://webpack.github.io/
analyse/)，它是一个在线 Web 应用。
 - npm install --save expose-loader  jquery
 - npm install jquery --save
 - npm install babel-plugin-import --save-dev 按需加载
 - npm install antd --save
 - 注意pages 页面里面必须包含index.js 或者index.jsx 不能叫home.js 或者别的名字
 - npm i --save-dev babel-plugin-transform-decorators-legacy //支持装饰器
 - npm i -D @babel/plugin-proposal-class-properties  JavaScript 的新特性 - 需要 @babel/plugin-proposal-class-properties 插件的支持。
 - npm install mobx-react-devtools
 - axios 请求django 服务器时，一定要注意在post提交时  一定要转为formdata的形式
 - 在与虚拟机里django的项目通信时 ，启动项目时要设置 0.0.0.0：8888， 然后设置虚拟机的防火墙允许9999端口访问
 - babel如果出现奇怪问题  那就npm update 就OK了




 # 加上服务端渲染
   - ssr是在build后的事情，为了首屏加载速度更快，seo友好，除首屏外其他的页面还是原来开发的代码
     为什么是build后的，node端是没有例如react事件集成环境或者别的环境所以需要打包编译好的文件
   - npm install babel-cli --save 使node环境支撑ecs
   - npm install body-parser --save express要用的
   - npm install cookie-parser --save express要用的
   - npm install babel-cli -S bael-node
   - npm install --save-dev @babel/core @babel/cli @babel/node babel升级后
   - npm install -D nodemon 开发时可以直接保存 就更新了  不用手动重启
   - npm install css-modules-require-hook --save  使node环境支持css
   - npm install asset-require-hook --save   支持图片
   - node babel环境中 不支持less编译  在babelrc中 设置style false
   - cross-env 是解决操作系统环境的问题 使用是 cross-env NODE_ENV=production   代码中const isDev = process.env.NODE_ENV === 'development'
   - hot-module-replacement react的热替换 同时还需要在babelrc的文件里加上配置 代码里要做判断 module.hot  还有其他配置 react-hot-loader的配置很多 wepack对应也要配置
   -  npm i memory-fs -D  用于内存读取文件
   - npm i http-proxy-middleware -D 服务端渲染时 需要用它去代理请求 才能拿到内存里面的东西
   - npm install @babel/core @babel/register --save-dev 是为了在服务端打包时  不处理less css等文件
   - npm install isomorphic-style-loader --save-dev 是服务端编译less css文件时  报window is undefind
