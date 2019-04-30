// require("babel-register")({
//     //默认情况ignore是node_modules表示node_modules下的所有文件的require不会进行处理
//     //这里明确指定css/less不经过babel处理
//     ignore: /\.(css|less)$/, 
//     // babelrc: false, // Tell babel-register to ignore the .babelrc file
// });

import React from 'react'
import App from '../src/app'
// import {StaticRouter} from 'react-router-dom'
// import staticPath from '../dist/asset-manifest.json'
// import axios from 'axios'
// import {Provider} from 'mobx-react';
// import stores from '../src/store/state'



 export default ()=>{
    
    return <App/>
                
    
 }
// export default function pp() {
//     return 666666666
// }