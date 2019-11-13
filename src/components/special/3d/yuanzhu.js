import React, { Component } from 'react'
import './yuanzhu.less'

export default class Yuanzhu extends Component {
  constructor(props) {
      super(props)
      this.length=11//我要创建正20面体
      this.n =1
  }
  componentDidMount() {
    this.createElement()
    
  }
  createElement(){

    this.box = document.querySelector('.zmiti-boxnei section');

    var html = '';

    var elWidth = 200;//元素的宽度,也可以通过获取元素的clientWidth,我这就硬编码写死了。

    var angle = 360 / this.length;
    this.angle = angle

    var translateZ = Math.tan(Math.PI / 180 * (180 - angle) / 2) * elWidth / 2;
    this.translateZ = translateZ


    for(var i = 0 ;i < this.length ;i++){

            html+= `<div style="transform:rotateY(${angle*(i)}deg) translateZ(${-translateZ}px)" class="zmiti-box-itemnei">${i+1}</div>`;
    };

    this.box.innerHTML = html;

}
  render() {
    return (
        <div id="wrapnei">

            <div className="zmiti-boxnei">
                <section>
                    {/* <div class="zmiti-box-item">1</div>
                    <div class="zmiti-box-item">2</div>
                    <div class="zmiti-box-item">3</div>
                    <div class="zmiti-box-item">4</div>
                    <div class="zmiti-box-item">5</div> */}
                </section>
            </div>
        </div>
    )
  }
}
