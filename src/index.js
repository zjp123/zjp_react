import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import App from './app'

class RenderDom extends Component{



    render(){

        return (

            <div>
                <App/>
            </div>
        )
    }
}

ReactDOM.render(<RenderDom />, document.getElementById('app'));
