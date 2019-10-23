import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './lunbotu.less'
import {huancong} from '../../../unit/move'

export default class Lunbotu extends Component {
  constructor(props) {
      super(props)
      this.lihoverhandle=this.lihoverhandle.bind(this)
      this.box = null
    //   this. = 0
      this.iwidth = 0
      this.kaiguan = true
      this.timer = null
      this.inow2 = 0
      this.state={
        inow:0,
        imglist:[
         {imgurl:require('../../../imgs/timg.jpeg')},
         {imgurl:require('../../../imgs/timg1.jpeg')},
         {imgurl:require('../../../imgs/time2.jpg')},
         {imgurl:require('../../../imgs/timg4.jpeg')},
         {imgurl:require('../../../imgs/timg5.jpeg')},
      ]
    }
  }
  componentDidMount() {
      let lunbolist = ReactDOM.findDOMNode(this.refs.lunbolist)
      this.box = lunbolist
      this.iwidth = lunbolist.childNodes[0].offsetWidth
      let tag = ReactDOM.findDOMNode(this.refs.tag).childNodes
      for (let i = 0; i < tag.length; i++) {
          tag[i].index = i
          
      }
      let that = this
      this.timer = setInterval(()=>{
        that.startMove.call(that)
      }, 2000)
      
  }
  startMove(){
    let that = this
    this.inow2++
    // this.inow++
    if(this.state.inow>=that.box.childNodes.length-1){
        that.setState({
            inow:0
        })
    }else{
        that.setState({
            inow:that.state.inow + 1
        })
    }
    // console.log(this.inow2,-this.inow2*this.iwidth)

    huancong(this.box,'left',-this.inow2*this.iwidth,function () {
        
        if(that.inow2>=that.box.childNodes.length-1){
            // console.log(111)
            clearInterval(that.timer)
            that.timer=null
            that.inow2= -1
            
            that.timer = setInterval(()=>{
                that.startMove.call(that)
                
            }, 2000)
            
            
            
        }
     
    })

     
    
  }
  parenthover(){
    clearInterval(this.timer)
  }
  parentout(){
    let that = this
    this.timer = setInterval(()=>{
      that.startMove.call(that)
    }, 2000)
  }
  lihoverhandle(e){
    //   clearInterval(that.timer)
    // console.log( e.target.index)

      if(this.kaiguan){//这么做是为了减轻setState的负荷
          this.kaiguan =false
         let me = this

      
       let index = e.target.index
      
    //   this.state.inow = index
    
    //   console.log(this.iwidth)
    //   if()
        me.setState({
            inow:index
        })
        me.inow2 = index
        if(me.inow2 >= me.box.childNodes.length-1){
            me.inow2 = -1
        }
        huancong(this.box,'left',-(index)*this.iwidth,function () {
            me.kaiguan = true
            

         
        })
    }

    //   this.box.style.left = -(index-this.inow)*this.iwidth + 'px'
  }
  render() {
    return (
      <div id="lunbotubox" onMouseOver={this.parenthover.bind(this)} onMouseOut={this.parentout.bind(this)}>
          <ul className="lunbolist" ref="lunbolist">
              
              {this.state.imglist.map((v,i)=>{
                  return (
                    <li key={v.imgurl} >
                        <img src={v.imgurl} alt=""  />
                    </li>
                  )
              })}
              {/* <li>
                  <img src="" alt="" srcset="" />

              </li>
              <li>
                  <img src="" alt="" srcset="" />

              </li>
              <li>
                  <img src="" alt="" srcset="" />

              </li>
              <li>
                  <img src="" alt="" srcset="" />

              </li> */}
          </ul>
          <ul className="tag" ref="tag">
             {this.state.imglist.map((v,i)=>{
                  return (
                    <li className={this.state.inow==i?'active':''} key={i} onMouseOver={this.lihoverhandle}>
                        {i+1}
                    </li>
                  )
              })}   
          </ul>
      </div>
    )
  }
}
