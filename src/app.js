import React, { Component } from  'react'
import { Layout } from 'antd';
import {Link, BrowserRouter as Router, Route } from 'react-router-dom'
const { Header } = Layout;
import '../src/components/header/header.less'
import '../src/base/base.css'
import logo from "../src/imgs/zjp.jpg"
import Home from '../src/pages/home/home.jsx'
import ShouYe from '../src/pages/index/index.jsx'
import Register from '../src/pages/register/register.jsx'
import Login from '../src/pages/login/login.jsx'

import DevTools from 'mobx-react-devtools'
import {Provider} from 'mobx-react';
import UserRegister from '../src/store/state'
require('jquery')
const sotres = new UserRegister()
// import BasicExample from '../../router/router'


class App extends Component{

    constructor(props){
        super(props)
        this.sliderHandle = this.sliderHandle.bind(this)
        this.sliderLeave = this.sliderLeave.bind(this)
    }

    componentDidMount(){

        // console.log(navDom)

    }
    sliderLeave(e){
        let sliderDom = $('.slider')

        let indexi = $(e.target).parent().index()
        // sliderDom[0].style.display = 'none'
        sliderDom.hide()
        sliderDom.removeClass('active')


        // sliderDom[0].style.transition = 'all 0.5s ease'
        console.log(indexi)
        sliderDom[0].style.left = indexi*100 + 'px'

    }
    sliderHandle(e){
        // let navDom = $('#router-list')
        // navDom[0].style.transition = 'all 0.5s ease'
        // console.log(this)
        
        let sliderDom = $('.slider')

        let indexi = $(e.target).parent().index()
        // sliderDom[0].style.display = 'block'
        sliderDom.show()
        sliderDom.addClass('active')
        // sliderDom[0].style.transition = 'all 0.5s ease'

        sliderDom[0].style.left = indexi*100 + 'px'

    }
    render(){

        return(
            <Provider stores={sotres}>
                <Router>
                    <div>
                        <Layout className="zjp-project">
                                    <div>
                                        <Header id="header">
                                            <div id="logo" className="fl"><img className="logoimg" src={logo} alt="logo"/></div>
                                                <div>
                                                    <ul id="router-list" className="fr" onMouseOver={this.sliderHandle} onMouseLeave={this.sliderLeave}>
                                                        <li><Link to="/">首页</Link></li>
                                                        <li><Link to="/home">家</Link></li>
                                                        <li><Link to="/login">登录</Link></li>
                                                        <li><Link to="/register">注册</Link></li>
                                                        <li className="slider"></li>
                                                    </ul>

                                                </div>
                                            {/* <BasicExample/> */}
                                            
                                        </Header>
                                    </div>

                        </Layout>
                        <div id="content">
                                <Route exact path="/home" component={Home}/>
                                <Route exact path="/" component={ShouYe}/>
                                <Route exact path="/login" component={Login}/>
                                <Route exact path="/register" component={Register}/>

                        </div>
                        <DevTools />
                    </div>
                </Router>
            </Provider>
        )
    }
    
}

export default App