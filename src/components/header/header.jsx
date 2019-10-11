import React, { Component } from 'react'
import { Layout } from 'antd';
import {Link } from 'react-router-dom'
const { Header } = Layout;
import logo from "../../imgs/zjp.jpg"
import './header.less'
import {observer, inject} from 'mobx-react';


@inject('userStore')
@observer
export default class componentName extends Component {
    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
  render() {
    const activestate = this.props.activestate
    // const islogin = this.props.userStore.userobj.loginState
    const username = this.getCookie('username')
    console.log(username, 'username')

    return (
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
                    <div id={username!==null?"touxiang_active":"touxiang"}>
                        {/* <img src={logo} /> */}
                    </div>
                </div>
            {/* <BasicExample/> */}
            
        </Header>
    )
  }
}
