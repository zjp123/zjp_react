import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './gundongtiao.less'

export default class Gundongtiao extends Component {
    mousedownhandle(e){
        let dragcontent = ReactDOM.findDOMNode(this.refs.drag_content)
        let that = ReactDOM.findDOMNode(this.refs.drag_block) 
        var e = e || e.event
        let disx = e.clientX - that.offsetLeft
        let disy = e.clientY - that.offsetTop
        // console.log(obj.offsetParent)
        // console.log(this.style.left)

        // console.log(that.style===this.style)
       

        document.onmousemove=function (e) {//当从div快速移除时
            var e = e || e.event
            // let lastx = e.clientX - disx
            let lasty = e.clientY - disy
            // console.log(lastx,lasty,MaxparentLeft,MaxparentTop)
            // console.log(lasty)
           if(lasty>that.offsetParent.offsetHeight-that.offsetHeight){
              lasty = that.offsetParent.offsetHeight-that.offsetHeight
           }
           if(lasty<0){
            lasty = 0
         }

            // that.style.left = lastx + 'px'
            that.style.top =  lasty + 'px'
            dragcontent.style.top = - lasty + 'px'

            
        }
        document.onmouseup=function (e) {
            var e = e || e.event

            
            document.onmousemove = document.onmouseup = null
            
        }
       
        return false //阻止浏览器默认的选择拖拽行为

    }
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="gundongtiaowrap">
         <div className="g_left">
            <div className="drag_block" ref="drag_block" onMouseDown={this.mousedownhandle.bind(this)}></div>
         </div>
         <div className="g_right">
            <div className="g_right_content" ref="drag_content">
                四级考试撒可富猫屎咖啡那棵树的减肥是今年放假那是电脑机房的三年级卡死 奥斯卡美丽的反馈萨芬；两份萨卡猫哭老鼠
                四级考试撒可富猫屎咖啡那棵树的减肥是今年放假那是电脑机房的三年级卡死 奥斯卡美丽的反馈萨芬；两份萨卡猫哭老鼠
                四级考试撒可富猫屎咖啡那棵树的减肥是今年放假那是电脑机房的三年级卡死 奥斯卡美丽的反馈萨芬；两份萨卡猫哭老鼠
                四级考试撒可富猫屎咖啡那棵树的减肥是今年放假那是电脑机房的三年级卡死 奥斯卡美丽的反馈萨芬；两份萨卡猫哭老鼠
                四级考试撒可富猫屎咖啡那棵树的减肥是今年放假那是电脑机房的三年级卡死 奥斯卡美丽的反馈萨芬；两份萨卡猫哭老鼠


            </div>
         </div>
      </div>
    )
  }
}
