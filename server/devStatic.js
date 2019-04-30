//开发时的template处理方式，因为开发时的文件是在内存当中的，不在硬盘里
const path = require('path');
const axios = require('axios');
const webpack = require('webpack')
const MemoryFileSystem = require('memory-fs')
const reactServer = require('react-dom/server')
const proxy = require('http-proxy-middleware')




const getTemplate = () => {
    return new Promise((resolve, reject) => {
    //   axios.get('http://localhost:3001/static/index.html')
    //     .then(res => {
            // resolve(res)
                          const page = `<!DOCTYPE html>
                          <html lang="zh-cn">
                          <head>
                        
                              <meta charset="UTF-8">
                              <meta name="viewport"
                                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                              <!-- <link rel="stylesheet" href="aa" type="text/css">
                              <link rel="stylesheet" href="common" type="text/css"> -->
                        
                        
                          </head>
                          <body>
                          <div id="app"><!-- app --></div>
                          <!-- <script src="runtime"></script> -->
                          <!-- <script src="base"></script>
                          <script src="common"></script> -->
                          </body>
                          </html>`
                          resolve(page)
        // })
        // .catch(err => {
        //   console.error('gettemplate error', err)
        // })
    })
  
  }


const Module = module.constructor
const serverConfig = require('../webpack.config.server')
const webpack_complier = webpack(serverConfig)

let serverBoundle
//从内存中读取 来监控文件更新
const mfs = new MemoryFileSystem()
webpack_complier.outputFileSystem = mfs

webpack_complier.watch({}, (errs,stats)=>{
    if (errs) throw errs
    //stats就是webpack启动或者打包时 终端输出的信息
    stats = stats.toJson()
    stats.errors.forEach(err => console.error(err))
    stats.warnings.forEach(warn => console.warn(warn))

    const bundlePath = path.join(
        serverConfig.output.path,
        serverConfig.output.filename
      )

    //这样读取出来的是字符串  并不是程序当中的模块  所以要转为模块
      const bundle = mfs.readFileSync(bundlePath, 'utf-8')
      console.log('mmm', bundle)
      const m = new Module()
      m._compile(bundle, 'server_entry.js')
    //   serverBoundle = m.exports.default
    serverBoundle = bundle
})

module.exports = function (app) {
    // app.use('/static/',proxy({
    //     target:'http://localhost:3001/static/'
    // }))
    app.get('*', function(req, res){
        getTemplate().then(tem=>{
            console.log(serverBoundle)
            const content = reactServer.renderToString(serverBoundle)
            // console.log('666', content
            res.send( tem.replace('<!-- app -->', content) )

        })
    })

}


