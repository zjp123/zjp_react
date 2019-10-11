import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './scrolltop.less'

export default class Totop extends Component {
 
  isstopScroll = 0
  setTop(){
    //  let odiv = 
     let odiv  = ReactDOM.findDOMNode(this.refs.totop)
    //  console.log(odiv)
     let scrolltop = document.documentElement.scrollTop || document.body.scrollTop
     odiv.style.top = scrolltop + document.documentElement.clientHeight  - odiv.offsetHeight - 80 + 'px'
     
  }
  toTophandle(){

      clearInterval(this.timer)
      let speed = null
      this.timer = setInterval(() => {
        // console.log(22)
        this.isstopScroll  = 1

        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop
        if(scrolltop==0){
            clearInterval(this.timer)
        }

        speed = Math.floor((0 - scrolltop )/8)
        document.documentElement.scrollTop = scrolltop + speed

      }, 30)
      
  }
  componentDidMount() {
      this.setTop()
      let that = this
      window.onscroll = function () {
        //   console.log(11)
          if(that.isstopScroll!=1){// 这就说明了不是定时器触发的 是人为触发的，那么就停止滚动条的运动
              clearInterval(that.timer)
          }
          that.isstopScroll =2
          that.setTop()
      }
  }
  render() {
    return (
      <div id="totop" ref="totop" onClick={this.toTophandle.bind(this)}>
        
      </div>
    )
  }
}
