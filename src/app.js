import React, { Component } from  'react'
import { Layout } from 'antd';
import {Link, BrowserRouter as Router, Route } from 'react-router-dom'
const { Header } = Layout;
import '../src/components/header/header.css'
import '../src/base/base.css'
import logo from "../src/imgs/zjp.jpg"
import Home from '../src/pages/home/home.jsx'
import ShouYe from '../src/pages/index/index.jsx'
import Register from '../src/pages/register/register.jsx'
import Login from '../src/pages/login/login.jsx'

// import BasicExample from '../../router/router'


class App extends Component{

    render(){

        return(
            <Router>
                <div>
                    <Layout className="zjp-project">
                                <div>
                                    <Header id="header">
                                        <div id="logo" className="fl"><img className="logoimg" src={logo} alt="logo"/></div>
                                            <div>
                                                <ul id="router-list" className="fr">
                                                    <li><Link to="/">首页</Link></li>
                                                    <li><Link to="/home">家</Link></li>
                                                    <li><Link to="/login">登录</Link></li>
                                                    <li><Link to="/register">注册</Link></li>
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

                </div>
            </Router>

        )
    }
    
}

export default App