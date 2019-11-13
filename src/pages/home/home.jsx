import React, { Component } from 'react';
// import * as React from 'react';

import './home.less'
import typeDec from '../../unit/freshNavDingWei'
import {observer} from 'mobx-react';
import Xiangce from '../../components/special/xiangce/xiangce'
import Upload from '../../components/special/uploadajax/upload'
import Fantu from '../../components/special/sanDfantu/fantu'
import Lunbotu from '../../components/special/lunbotu/lubotu'
import WufengLunbo from '../../components/special/wufenglunbo/wufenglun'
import Tiaowen from '../../components/special/jiazaijindutiao/tiaowen'
import SanxingDaohang from '../../components/special/sanxingdaohang/sanxing'
import Waishijiao from '../../components/special/3d/3dwaishijiao'
import Neishijiao from '../../components/special/3d/neishijiao'
import Yuanzhu from '../../components/special/3d/Yuanzhu'

@typeDec
@observer
class Home extends Component{

    constructor(props){
        super(props)
    }
    render(){


        return(

            <div id="home">
                <Xiangce />
                <Upload />
                <Fantu />
                {/* <Lunbotu/> */}
                <WufengLunbo />
                <Tiaowen/>
                <SanxingDaohang />
                <Waishijiao/>
                <Neishijiao/>
                <Yuanzhu/>
            </div>
        )
    }
}

export default Home