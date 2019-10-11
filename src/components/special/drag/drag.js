import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './drag.less'
import {drag} from '../../../unit/domove'
export default class DragMoudle extends Component {

  componentDidMount() {
    let obj = ReactDOM.findDOMNode(this.refs.dragDom)
    console.log(obj)
    drag(obj)
  }
  
  render() {
    return (
      <div id="dragwrap">
        <div id="drag_block" ref="dragDom"></div>
      </div>
    )
  }
}
