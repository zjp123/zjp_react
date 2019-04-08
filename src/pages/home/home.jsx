import React, { Component } from 'react';
// import * as React from 'react';

import './home.css'
import typeDec from '../../unit/freshNavDingWei'
import {observer} from 'mobx-react';


@typeDec
@observer
class Home extends Component{

    constructor(props){
        super(props)
    }
    render(){


        return(

            <div id="home">
                这是家的页面
            </div>
        )
    }
}

export default Home