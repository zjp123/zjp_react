import { Layout } from 'antd';
import React, {Component} from "react"
const {Header, Footer} = Layout;
import 'antd/dist/antd.css'
import './footer.less'


class FooterWrap extends Component{



    render(){

        return (
            <div id="footer">
                修养，安静，善良，思考-阿门。
            </div>
        )
    }
}


export default FooterWrap