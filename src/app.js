import React, { Component } from  'react'
import { Layout } from 'antd';
import {Link, Route } from 'react-router-dom'
const { Header } = Layout;
// import '../src/components/header/header.less'
import FooterWrap from '../src/components/footer/footer'

import '../src/base/base.css'
import logo from "../src/imgs/zjp.jpg"
import Home from '../src/pages/home/home.jsx'
import ShouYe from '../src/pages/index/index.jsx'
import Register from '../src/pages/register/register.jsx'
import Login from '../src/pages/login/login.jsx'

// import DevTools from 'mobx-react-devtools'
// import {Provider} from 'mobx-react';
// import stores from '../src/store/state'
require('jquery')
// const sotres = new UserStore()
// import BasicExample from '../../router/router'


class App extends Component{

    constructor(props){
        super(props)
        this.sliderHandle = this.sliderHandle.bind(this)
        this.sliderLeave = this.sliderLeave.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.callbackHancle = this.callbackHancle.bind(this)
        this.state = {
            isActive:'index'
        }

    }

    componentDidMount(){

        // console.log(navDom)

    }
    callbackHancle(type){
        if(type==="register"){type='reg'}
        if(type==="/"){type='index'}
        if(type==="login"){type='login'}
        if(type==="home"){type='home'}
        this.setState({
            isActive:type
        })
    }
    handleClick(e){
        // let sliderDom = $('.slider')

        // let indexi = $(e.target).parent().index()
        // // sliderDom[0].style.display = 'block'
        // sliderDom.show()
        // sliderDom.addClass('active')
        // // sliderDom[0].style.transition = 'all 0.5s ease'

        // sliderDom[0].style.left = indexi*100 + 'px'
        let type = $(e.target).parent().data('type')
        // console.log(type)
        this.setState({
            isActive:type
        })
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
        let activestate = this.state.isActive
        // console.log(activestate)
        
        // activestate=(activestate=='login'?'visted':'')
        // activestate=(activestate=='reg'?'visted':'')
        // activestate=(activestate=='home'?'visted':'')
        console.log(activestate)
        return(
            
                    <div>
                        <Layout className="zjp-project">
                                    <div>
                                        <Header id="header">
                                            <div id="logo" className="fl"><img className="logoimg" src={logo} alt="logo"/></div>
                                                <div>
                                                    <ul id="router-list" className="fr"  onClick={this.handleClick}>
                                                        <li className={activestate=="index"?"visted":''} data-type='index'><Link to="/">首页</Link></li>
                                                        <li className={activestate=="home"?"visted":''} data-type='home'><Link to="/home">家</Link></li>
                                                        <li className={activestate=="login"?"visted":''} data-type='login'><Link to="/login">登录</Link></li>
                                                        <li className={activestate=="reg"?"visted":''} data-type='reg'><Link to="/register">注册</Link></li>
                                                        <li className="slider"></li>
                                                    </ul>

                                                </div>
                                            {/* <BasicExample/> */}
                                            
                                        </Header>
                                    </div>

                        </Layout>
                        <div id="content">
                                <Route exact path="/home" render={(props)=>(
                                    <Home  {...props} typeHandle={this.callbackHancle}/>
                                )} />
                                <Route exact path="/" render={(props)=>(
                                    <ShouYe  {...props} typeHandle={this.callbackHancle}/>
                                )}  />
                                <Route exact path="/login" render={(props)=>(
                                    <Login  {...props} typeHandle={this.callbackHancle}/>
                                )}  />
                                <Route exact path="/register" render={(props)=>(
                                    <Register  {...props} typeHandle={this.callbackHancle}/>
                                )}  />

                        </div>
                        <div id="footerWrap">
                            <FooterWrap/>
                        </div>
                        
                    </div>
            
        )
    }
    
}

export default App