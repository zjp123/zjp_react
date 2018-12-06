import React, { Component } from 'react'
// import BasicExample from '../src/router/index.jsx'
import zjp from '../src/imgs/zjp.jpg'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import {
   
    Route,

  
  } from 'react-router-dom'
require('jquery')
class App extends Component{

    componentDidMount(){
        console.log($('#app'))
    }
    render(){

        return (
            <div>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/home' component={Home}/>
                {/* <p>jsjjsj</p> */}
                {/* <Route path='*' component={Home}/> */}
            </div>
        )

    }
}

export default App