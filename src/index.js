import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom';
import {Link, BrowserRouter, Route } from 'react-router-dom'
import DevTools from 'mobx-react-devtools'
import {Provider} from 'mobx-react';
import stores from '../src/store/state'
import '../src/components/header/header.less'

import App from './app'

class RenderDom extends Component{



    render(){

        return (

            <Provider {...stores}>
                <BrowserRouter>
                    <Fragment>
                        <App/>
                        <DevTools/>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<RenderDom />, document.getElementById('app'));
