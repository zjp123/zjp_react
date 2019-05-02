import React, { Component } from  'react'
import { Layout } from 'antd';
import Link from 'next/link'
import Router, { withRouter }  from 'next/router'
const { Header } = Layout;
// import '../src/components/header/header.less'
import FooterWrap from '../src/components/footer/footer'

import '../src/base/base.css'
// import logo from ""
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
        this.call
        // activestate=(activestate=='login'?'visted':'')
        // activestate=(activestate=='reg'?'visted':'')
        // activestate=(activestate=='home'?'visted':'')
        
        return(
            
            <Container>
                        <Layout className="zjp-project">
                                    <div>
                                        <Header id="header">
                                            <div id="logo" className="fl"><img className="logoimg" src="../static/zjp.jpg" alt="logo"/></div>
                                                <div>
                                                    <ul id="router-list" className="fr"  onClick={this.handleClick}>
                                                        <li className={activestate=="index"?"visted":''} data-type='index'><Link href="/">首页</Link></li>
                                                        <li className={activestate=="home"?"visted":''} data-type='home'><Link href="/home">家</Link></li>
                                                        <li className={activestate=="login"?"visted":''} data-type='login'><Link href="/login">登录</Link></li>
                                                        <li className={activestate=="reg"?"visted":''} data-type='reg'><Link href="/register">注册</Link></li>
                                                        <li className="slider"></li>
                                                    </ul>

                                                </div>
                                            {/* <BasicExample/> */}
                                            
                                        </Header>
                                    </div>

                        </Layout>
                        <div id="content">
                            
                            <ShouYe typeHandle={this.callbackHancle}/>
                           
                        </div>
                        <div id="footerWrap">
                            <FooterWrap/>
                        </div>
                        
            </Container>
            
        )
    }
    
}

export default App