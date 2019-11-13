import React, { Component } from 'react'
import './waishijiao.less'

export default class Waishijiao extends Component {
  constructor(props) {
      super(props)
      this.length=8//我要创建正20面体
      this.n =1
  }
  componentDidMount() {
    this.createElement()
    document.body.addEventListener('click',()=>{

        this.box.style.transform = 'translateZ('+this.translateZ+'px) rotateY('+(this.n*this.angle)+'deg)';
        this.n++

    });
  }
  createElement(){

    this.box = document.querySelector('.zmiti-box section');

    var html = '';

    var elWidth = 200;//元素的宽度,也可以通过获取元素的clientWidth,我这就硬编码写死了。

    var angle = 360 / this.length;
    this.angle = angle

    var translateZ = Math.tan(Math.PI / 180 * (180 - angle) / 2) * elWidth / 2;
    this.translateZ = translateZ


    for(var i = 0 ;i < this.length ;i++){

            html+= `<div style="transform:rotateY(${angle*(i)}deg) translateZ(${-translateZ}px)" class="zmiti-box-item">${i+1}</div>`;
    };

    this.box.innerHTML = html;

}
  render() {
    return (
        <div id="wrap">

            <div className="zmiti-box">
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
