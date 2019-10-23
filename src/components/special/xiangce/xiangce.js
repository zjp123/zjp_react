import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './xiangce.less'

export default class Xiangce extends Component {
  
  constructor(props) {
      super(props)
      this.imgurl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569562175682&di=5c37dc881eb305c789945816a4459352&imgtype=jpg&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151020%2Fmp36648941_1445311232417_4.jpg'
      this.taphandle = this.taphandle.bind(this)
  }

  componentDidMount() {
    let me = this
    let xiancelist = ReactDOM.findDOMNode(this.refs.xiancelist)
    let imglist = xiancelist.childNodes
    let xcbox = ReactDOM.findDOMNode(this.refs.xcbox)
    let zhongjian = Math.floor(imglist.length/2)//中间显示那张图
    let iinterval = 100 //间距
    let ileft = -iinterval//left初始值
    let inow = 0
    let idist = 0
    let iheight = 200
    for (let i = 0; i < imglist.length; i++) {
        ileft += iinterval
        // imglist[i].style.transition = '0.6s all ease';

        if(zhongjian<i){//右边的
            imglist[i].style.left = ileft + 'px'
            imglist[i].style.transform = 'rotateY(-45deg)';

        }else if(zhongjian>i){//左边的
            imglist[i].style.left = ileft + 'px'
            imglist[i].style.transform = 'rotateY(45deg)';


        }else{
            ileft += iinterval
            imglist[i].style.left = ileft + 'px'
            imglist[i].style.transform= 'translateZ(100px)';
            inow = i

            ileft += iinterval 


        }
        // iheight = Math.max(iheight, getComputedStyle(imglist[i],false)['height'])
        // console.log(imglist[i].scrollHeight, getComputedStyle(imglist[i],false)['height'])

        imglist[i].index = i
        imglist[i].onclick=function () {
            // alert(inow)
            idist = -(imglist[i].index-inow)*iinterval
        
            // console.log(imglist[i].index,idist,inow)
            me.taphandle(imglist,imglist[i].index,idist,iinterval) 

        }
       // imglist[i].onload=function () {//如果不这样做，图片可能没有加载完成，获取不到图片的宽度和高度，不好设置了。
        //     iheight = Math.max(iheight, imglist[i].offsetHeight)
        //     xiancelist.style.height = iheight+ 'px'
        //     xiancelist.style.top = (xcbox.offsetHeight/2-xiancelist.offsetHeight)+ 'px'


        //     console.log(666,iheight)

        // }
        
        
    }
    // console.log(xiancelist.offsetHeight/2)
    //这里的iheight应该动态获取的 可以用settimeout 来解决图片未加载完成的问题，这里写死了200
    xiancelist.style.height = iheight+ 'px'
    xiancelist.style.top = (xcbox.offsetHeight/2-xiancelist.offsetHeight)+ 'px'
    xiancelist.style.left = (xcbox.offsetWidth/2-(imglist[inow].offsetLeft + 300/2))+ 'px'
    // console.log(xcbox.offsetWidth,imglist[inow].offsetLeft)

  }
  taphandle(imglist,inow,ileft,iinterval,zhengfu,index){
    ileft -= iinterval
    
    for (let i = 0; i < imglist.length; i++) {
        ileft += iinterval
        if(inow<i){//右边的
            imglist[i].style.left =  ileft + 'px'
            // console.log(i)
            imglist[i].style.transform = 'rotateY(-45deg)';
            

        }else if(inow>i){//左边的
            imglist[i].style.left =  ileft + 'px'

            imglist[i].style.transform = 'rotateY(45deg)';
            


        }else{
            ileft += iinterval
            imglist[i].style.left =  ileft + 'px'

            imglist[i].style.transform= 'translateZ(100px)';


            ileft += iinterval 


        }
        
        
        
    }
    
         
    
  }
  
  

  render() {
    return (
      <div id="xiangcebox" ref="xcbox">
        <p>相册预览</p>
         <div className="imglist" ref="xiancelist">
            <img src={require('../../../imgs/timg1.jpeg')} />
            <img src={require('../../../imgs/timg.jpeg')} />
            <img src={require('../../../imgs/time2.jpg')} />
            <img src={require('../../../imgs/timg4.jpeg')} />
            <img src={require('../../../imgs/timg5.jpeg')}/>
         </div>
      </div>
    )
  }
}

//要点1：不要为每个img设置left，而是用循环来设置
//   2:只要设置每次移动的距离然后用循环 设置第一个img的left 依次相加间隔距离 他们自然就排好了。
//   3：inow是在第一次就定下来的，不用每次都重新设置 ！！！
//   4: 判断左右可以用i的大小来判断 ！！！！