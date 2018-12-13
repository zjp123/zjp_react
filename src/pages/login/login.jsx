import React, { Component } from 'react';
// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import { Button } from '../../components/Button';
import './login.css';
// import BasicExample from '../../router/index'

// var app = document.getElementById('app')
// app.innerHTML = 'login'
// console.log('home')
class Login extends Component{

    constructor(props){
        super(props)
    }

    render(){

        return(
            <div>这是关于login页面</div>
        )
    }
}
export default Login

// ReactDOM.render(<Login />, document.getElementById('app'));

// if (module.hot) {
//     // I I accept 函数的第 1 个参数指出当前文件接收哪些子模块的替换，这里表示只接收 . IAppCorr or 川这个子模块
//      //第 2 个参数用于在新的子模块加载完毕后需要执行的逻辑
//      module.hot.accept ([ './login.jsx' ],()=>{

//         ReactDOM.render(<Login />, document.getElementById('app'));
        
//         //在新的 AppComponent 加载成功后重新执行组建渲染逻辑 render(<AppComponentl> , window.document.getElementByid (’ app ’ ));
//      });
//  }