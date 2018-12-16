import React, { Component } from 'react';
import * as mobx from 'mobx';

// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import { Button } from '../../components/Button';
import './index.css';
import axios from 'axios'
import {observable, action, autorun} from 'mobx';
import {observer} from 'mobx-react';
let appState = observable({
    timer: 0
});

appState.resetTimer = action(function reset() {
    appState.timer = 0;
    appState.age = 0;

});

setTimeout(action(function tick() {
    appState.timer += 1;
    appState.age = 18;

}), 1000);

// console.log(appState)
var obj = mobx.observable({
    x: 1
});

var clone = mobx.toJS(obj);

//console.log(obj); // true
//console.log(clone); // false
// import RouteMap from '../../router/router'
//import HeaderNav from '../../components/header/header'
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();
// // import App from '../../index'
// var app = document.getElementById('app')
// app.innerHTML = 'kskskksksk'
// console.log('home')
@observer
class ShouYe extends Component{
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        //30.27.10.55 
        //172.16.68.149
        axios.get('/api')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    onReset() {
        this.props.appState.resetTimer();
    }
    render(){

        return(
            <div>
                {/* <HeaderNav/> */}
                <div>这是首页</div>
                <button onClick={this.onReset.bind(this)}>
                    Seconds passed: {this.props.appState.timer}
                    Seconds passed: {this.props.appState.age}
                </button>
            </div>
        )

    }
}
ShouYe.defaultProps={
    appState:appState
};
export default ShouYe
// ReactDOM.render(<Ddd />, document.getElementById('app'));

// ReactDOM.render(<RouteMap  history={history}/>, document.getElementById('app'));

// if (module.hot) {
//     // I I accept 函数的第 1 个参数指出当前文件接收哪些子模块的替换，这里表示只接收 . IAppCorr or 川这个子模块
//      //第 2 个参数用于在新的子模块加载完毕后需要执行的逻辑
//      module.hot.accept ([ './index.jsx' ],()=>{

//         // ReactDOM.render(<Ddd />, document.getElementById('app'));
//         ReactDOM.render(<RouteMap  history={browserHistory}/>, document.getElementById('app'));
        
//         //在新的 AppComponent 加载成功后重新执行组建渲染逻辑 render(<AppComponentl> , window.document.getElementByid (’ app ’ ));
//      });
//  }

