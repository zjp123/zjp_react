import React, { Component } from 'react';
// import * as React from 'react';
import Router, { withRouter }  from 'next/router'

import './home.less'
import Head from '../layout/head.jsx'
// import typeDec from '../../src/unit/freshNavDingWei'

import {observer} from 'mobx-react';


// @typeDec
@observer
class Home extends Component{

    constructor(props){
        super(props)
    }
    render(){


        return(
            <React.Fragment>
                <Head/>
                <div id="home">
                    这是家的页面
                </div>
            </React.Fragment>
            
        )
    }
}

export default withRouter(Home)