import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './fantu.less'

export default class Fantu extends Component {
  componentDidMount(){
    //   let fanlist = ReactDOM.findDOMNode(this.refs.fanlist)
      let fanbox = ReactDOM.findDOMNode(this.refs.fanbox)
      let ullist = fanbox.getElementsByTagName('ul')
    //   console.log(fanlist)
      let fan_btn1 = ReactDOM.findDOMNode(this.refs.fan_btn1)
      let fan_btn2 = ReactDOM.findDOMNode(this.refs.fan_btn2)
    //   let lilist = fanlist.childNodes
      let irow = ullist[0].offsetHeight/ullist[0].childNodes[0].offsetHeight
    //   let ilie = Math.floor(ullist.offsetWidth/ullist.childNodes[0].offsetWidth)
      let ilie = ullist[0].childNodes.length / irow
    //   let erweili = this.setxy(lilist,irow,ilie)
      let me = this
      let oulxy = [] //保存所有ul的li坐标
      let inow = 0
      fan_btn1.onclick=function () {
        //   alert(inow)inow
        
          if(inow<=0){
            return 
          }
          inow--
          ullist[inow].style.visibility="visible"//因为使用display的话对过度效果有影响
          ullist[inow].childNodes[0].removeEventListener('transitionend',me.end,false)
        me.bianhuan(oulxy[inow],0,0,1,1,function () {
            
            // console.count(this)
            // this.style.background = 'green'
            this.style.borderColor = 'rgba(0,0,0,0)'
            this.style.transform = 'rotateX(0deg) rotateY(0deg)'
            this.style.opacity = 1
           
            
                
        })
       
        

     }
      fan_btn2.onclick=function () {
        if(inow>=oulxy.length-1){
            return 
        }
        
        me.bianhuan(oulxy[inow],ilie-1,irow-1,-1,-1,function () {
            
            
            // this.style.background = 'red'
            
            this.style.borderColor = 'rgba(0,0,0,0.8)'
            this.style.transform = 'rotateX(-720deg) rotateY(-540deg)'
            this.style.opacity = 0
            if(this.indexx==0&&this.indexy==0){
                this.addEventListener('transitionend',me.end,false)
            }
            
                
        })
        inow++
       
        

      } 
    //   for (let i = 0; i < lilist.length; i++) {
          
    //     lilist[i].onclick=function () {

    //         // alert(this.indexx + ',' + this.indexy)
    //         me.bianhuan(erweili,this.indexx, this.indexy,-1,-1,function () {
    //             erweili[this.indexy][this.indexx].style.background = 'green'
    //         })
    //     }
    //   }
    //   alert(irow + ''+ ilie)
      for (let i = 0; i < ullist.length; i++) {
        //   for (let j = 0; j < ilie; j++) {
              
              
        //   }
        ullist[i].style.zIndex = ullist.length - i
        ullist[i].index = i
        
        ullist[i].onclick=function () {
            alert(ullist[i].index)
        }
        oulxy.push(this.setxy(ullist[i].childNodes,irow,ilie))
          
      }
  }
  end(e){
    console.log(e.type,e.propertyName)
    if(e.propertyName=='opacity'){
        this.parentNode.style.visibility="hidden"

    }
  }
  bianhuan(obj,x,y,upx,upy,fn){
    if(!obj[y] || !obj[y][x]){
        // alert(88)
        return ;
    }
    if(fn){
        fn.call(obj[y][x])
    }
    // obj[y][x].style.background = 'green'
   clearTimeout(obj[y][x].timer)
    obj[y][x].timer = setTimeout(() => {
        this.bianhuan(obj,x,y+upy,upx,upy,fn)
        this.bianhuan(obj,x+upx,y,upx,upy,fn)

    }, 50);
    

  }
  setxy(lilist,irow,ilie){
    var arr = []
    for (let i = 0; i < irow; i++) {
        var arr2 = []
        for (let j = 0; j < ilie; j++) {
            
            lilist[i*ilie+j].indexx = j
            lilist[i*ilie+j].indexy = i
            lilist[i*ilie+j].style.backgroundPosition = `-${j*75}px -${i*60}px`
            arr2.push(lilist[i*ilie+j])
        }
        arr.push(arr2) //构建二维数组
        
    }

    return arr
  }
  render() {
    return (
      <div className="fanbox" ref="fanbox">
          <input type="button" value="上一张" ref="fan_btn1" id="fan_btn1"/>
          <input type="button" value="下一张" ref="fan_btn2" id="fan_btn2"/>
          <ul className = "fanlist"
          ref = "fanlist" >
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              
          </ul>
          <ul className = "fanlist"
          ref = "fanlist" data-index="2">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              
          </ul>
          {/* <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569562175682&di=5c37dc881eb305c789945816a4459352&imgtype=jpg&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151020%2Fmp36648941_1445311232417_4.jpg"/> */}
      </div>
    )
  }
}
