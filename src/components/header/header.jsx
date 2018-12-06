import React, { Component } from  'react'
import { Layout } from 'antd';
import {Link, BrowserRouter as Router } from 'react-router-dom'
const { Header } = Layout;
import './header.css'
import logo from "../../imgs/zjp.jpg"
import BasicExample from '../../router/router'

class HeaderNav extends Component{

    render(){

        return(

            <Layout className="zjp-project">
                <Header id="header">
                    <div id="logo" className="fl"><img className="logoimg" src={logo} alt="logo"/></div>
                    <Router>
                    <ul id="router-list" className="fr">
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/home">家</Link></li>
                        <li><Link to="/login">登录</Link></li>
                        <li><Link to="/signup">注册</Link></li>
                    </ul>
                    </Router>
                    <BasicExample/>
                </Header>
            </Layout>
        )
    }
    
}

export default HeaderNav