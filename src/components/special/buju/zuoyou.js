import React, { Component } from 'react';
import  './buju.less'

class  Zuozhongyoubuju extends Component {
  render() {
    return (
        <div className="wrap1">
            <div id="zuozhongyou" suppressContentEditableWarning="true" contentEditable={true}>
                <aside className="left">左内容</aside>
                <aside className="right">右内容</aside>
                <section className="main">中间自适应两边固定</section>
            </div>
        </div>
    )
  }
}



 class Shuangfeiyi extends Component {
    render() {
      return (
          <div className="wrap2">
              <div id="shuangfei" >
                  <section className="main">
                     <div className="content">双飞翼</div>
                  </section>
                  
                  <aside className="left">左内容</aside>
                  <aside className="right">右内容</aside>
              </div>
          </div>
      )
    }
  }


  export {Shuangfeiyi, Zuozhongyoubuju }