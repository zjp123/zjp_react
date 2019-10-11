import React, { Component } from 'react';
import * as mobx from 'mobx';

// import * as React from 'react';
import ReactDOM from 'react-dom';
// import { Button } from '../../components/Button';
import './index.less';
import axios from 'axios'
import {observable, action, autorun} from 'mobx';
import {observer, inject} from 'mobx-react';
import typeDec from '../../unit/freshNavDingWei'
import ReactSwiperExample from '../../components/banner/banner'
import {Zuozhongyoubuju, Shuangfeiyi} from '../../components/special/buju/zuoyou'
import Vdiv from '../../components/special/fangxiangdiv/topdiv'
import Qingchu from '../../components/special/qingchu/qingchudiv'
import DragMoudle from '../../components/special/drag/drag'
import Gundongtiao from '../../components/special/diygundongtiao/gundongtiao'
import PreLoadImg from '../../components/special/imgpreload/imgpreload'
import AnxuLoad from '../../components/special/anxuload/anxuload'
import TanxingMenu from '../../components/special/tanxingmenu/tanxingmenu'
// let appState = observable({
//     timer: 0
// });

// appState.resetTimer = action(function reset() {
//     appState.timer = 0;
//     appState.age = 0;

// });

// setTimeout(action(function tick() {
//     appState.timer += 1;
//     appState.age = 18;

// }), 1000);

// // console.log(appState)
// var obj = mobx.observable({
//     x: 1
// });

// var clone = mobx.toJS(obj);

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
@inject('indexStore')
@typeDec
@observer
class ShouYe extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            activeindex:0,
            itemlist:[
            {   type:'手机', 
                item:[
                    {
                        img:require('../../imgs/sj.jpg'),
                        name:'小米x'
                    },
                    {
                        img:require('../../imgs/sj.jpg'),
                        name:'小米x'
                    },
                    {
                        img:require('../../imgs/sj.jpg'),
                        name:'小米x'
                    },
                ]
            
            },
            {   type:'电器', 
                item:[
                    {
                        img:require('../../imgs/sj.jpg'),
                        name:'家电x'
                    },
                    {
                        img:require('../../imgs/sj.jpg'),
                        name:'家电x'
                    },
                    {
                        img:require('../../imgs/sj.jpg'),
                        name:'家电x'
                    },
                ]
            },
            {   type:'电子', 
                item:[
                    {
                        img:require('../../imgs/sj.jpg'),
                        name:'mpx'
                    },
                    {
                        img:require('../../imgs/sj.jpg'),
                        name:'mpx'
                    },
                    {
                        img:require('../../imgs/sj.jpg'),
                        name:'mpx'
                    },
                ]
            },
        ]
        
    }
}
    componentDidMount(){
        //30.27.10.55 
        //172.16.68.149
        // axios.get('/api')
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
        // console.log(this.refs, 'refs')

        


    }
    componentWillUnmount() {
        clearInterval(this.timerid)
      
    }
    
    onReset() {
        // this.props.appState.resetTimer();
    }
    render(){

        return(
            <div id="sectionmain">
                    <div id="banner">
                        <div id="banner_left">
                            <ul className="item_list">
                                {
                                    this.state.itemlist.map((v,i)=>{

                                        return (
                                            <li key={v.type + '' + i}>
                                                <a>
                                                {v.type}
                                                <em className="iconfont-arrow-right-big"></em>
                                                </a>
                                                <div className="children" >
                                                <ul className="children_list col-1">
                                                    <li>
                                                        <img src={require('../../imgs/sj.jpg')} alt="" />
                                                        <span>小米x</span>
                                                    </li> 
                                                    
                                                {
                                                    v.item.map((x,y)=>{
                                                        return (
                                                            <li key={x.name + '' + y}>
                                                                <img src={x.img} alt="" />
                                                                <span>{x.name}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                                
                                                </ul>
                                                </div>
                                            </li>
                                    
                                        )

                                    })
                                }
                                {/* <li>
                                    <a>手机</a>
                                    <div className="children" >
                                        <ul className="children_list col-1">
                                            <li>
                                                <img src={require('../../imgs/sj.jpg')} alt="" />
                                                <span>小米x</span>
                                            </li>
                                            <li>
                                                <img src={require('../../imgs/sj.jpg')} alt="" />
                                                <span>小米x</span>
                                            </li>
                                            <li>
                                                <img src={require('../../imgs/sj.jpg')} alt="" />
                                                <span>小米x</span>
                                            </li>
                                            <li>
                                                <img src={require('../../imgs/sj.jpg')} alt="" />
                                                <span>小米x</span>
                                            </li>
                                            <li>
                                                <img src={require('../../imgs/sj.jpg')} alt="" />
                                                <span>小米x</span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                */}
                                
                                
                            </ul>
                        </div>
                        <div id="banner_right" ref='parent'>
                                <ReactSwiperExample />
                                {/* <ul className="imglist" ref='child'>
                                    <li>
                                        <img src={require('../../imgs/banner2.png')} alt="" />
                                    </li>
                                    <li>
                                        <img src={require('../../imgs/banner3.png')} alt="" />

                                    </li>
                                    <li>
                                        <img src={require('../../imgs/banner5.png')} alt="" />

                                    </li>
                                </ul>
                                <ul className="lightlist">
                                    <li className={this.state.activeindex==0?'active':''}></li>
                                    <li className={this.state.activeindex==1?'active':''}></li>
                                    <li className={this.state.activeindex==2?'active':''}></li>
                                </ul> */}
                            
                            </div>
                        
                    </div>
                    <div id="luanqibazao">
                        <Shuangfeiyi/>
                        <Zuozhongyoubuju/>
                    </div>
                    <div id="fxdiv">
                        <Vdiv />
                        <Qingchu />
                    </div>
                    <div className="clear">
                        <DragMoudle />
                        <Gundongtiao />
                    </div>
                    <div className="preloadwrap">
                        <PreLoadImg />
                    </div>
                    <div style={{overflow:'hidden'}}>
                        <AnxuLoad />
                    </div>
                    <div>
                        <TanxingMenu />
                    </div>
            </div>
        )

    }
}
// ShouYe.defaultProps={
//     appState:appState
// };
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

