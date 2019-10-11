import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './tanxingmenu.less'

export default class TanxingMenu extends Component {
//   timer = null
//   timer = null
  constructor(props) {
      super(props)
      this.timer = null
  }
  
  movehover(e){
    e.preventDefault();
    // console.log(e.target.offsetLeft)
    let omark = this.refs.mark
    let omarklist = this.refs.marklist
    this.tanxingmove(omark,omarklist, e.target.offsetLeft)
  }
  tanxingmove(obj,olist,target){
    clearInterval(this.timer)
    let ispeed = null
    this.timer = setInterval(() => {

       ispeed += (target - obj.offsetLeft) / 6
       ispeed *= 0.75
    //    speed = speed>0?Math.ceil((target-obj.offsetLeft)/8):Math.floor((target-obj.offsetLeft)/8)
       
       if(Math.abs(ispeed)<=1&&Math.abs(target - obj.offsetLeft)<=1){

           clearInterval(this.timer)
           obj.style.left = target + 'px'
           olist.style.left = -target + 'px'
           ispeed = 0

       }else{

           obj.style.left = obj.offsetLeft + ispeed + 'px'
           olist.style.left = -(obj.offsetLeft) + 'px'
       }


    }, 30)
    
  }
  render() {
    return (
      <div id="tanxingwrap">
        <ul className="menulist">
            <li id="mark" ref="mark">
                <ul ref="marklist">
                    <li>首页</li>
                    <li>家</li>
                    <li>论坛</li>
                </ul>
            </li>
            <li className="box" onMouseOver={this.movehover.bind(this)}>首页</li>
            <li className="box" onMouseOver={this.movehover.bind(this)}>家</li>
            <li className="box" onMouseOver={this.movehover.bind(this)}>论坛</li>
        </ul>
      </div>
    )
  }
}
