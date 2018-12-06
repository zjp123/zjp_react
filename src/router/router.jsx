import React from 'react'
import {
  Router,
  Route,
  Link,
  Switch,
  IndexRoute

} from 'react-router-dom'
import './router.css'

// import Ddd from '../pages/index/index'

import App from '../app'




class RouteMap extends React.Component{
    updateHandle(){
        console.log("换了一页")
    }
    render(){
        return(
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' exact component={App}>
                    {this.props.children}
                </Route>
            </Router>
        );
    }
}
export default RouteMap;
