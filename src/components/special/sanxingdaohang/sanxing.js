import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import  './sanxing.less'

export default class SanxingDaohang extends Component {
    constructor(props) {
        super(props)
        this.clckhandle = this.clckhandle.bind(this)
        this.off = true
        this.list = null
    }
    
  componentDidMount() {
      let sanxing = ReactDOM.findDOMNode(this.refs.sanxing)
      let list = sanxing.children
      this.list = list
      for (let i = 0; i < this.list.length-1; i++) {
        // console.log(this.list[i])

        let that = this
        this.list[i].onclick = function()
		{
            // this.style.transition= "0.5s all ease"
            // this.style.transform = "scale(2)"
            // this.style.opacity = 0.3
            // this.className = 'fangda'
			// this.addEventListener('webkitTransitionEnd',function(){that.end.call(this,that)()},false);
            // this.addEventListener('transitionend',function(){that.end.call(this,that)()},false);
            // console.log(666)
            this.style.transition="0.3s";
			this.style.WebkitTransform="scale(2) rotate(-720deg)";
			this.style.opacity=0.1;
			let me = this
            that.addEnd(this,that.end)               
            // that.addEnd(this,that.end(this))
			
		};	
      }

  }
  clckhandle(e){
      let target = e.target
      this.dingwei()

      if(this.off){
        target.className = 'zhuan'

      }else{
        target.className = 'daozhuan'


      }
  }
  gettopleft(deg){
     return {
         top:Math.cos(deg*Math.PI/180)*120,
         left:Math.sin(deg*Math.PI/180)*120

     }
  }
  /*
  end=(e)=>{
    
    let that = this
    that.removeEnd(e,that.end)

    return function () {
        console.log(88888)

        // this.className = 'huiyuan'
        // console.log(this)
        this.style.transition="0.1s";
		this.style.transform="scale(1) rotate(-720deg)";
		this.style.opacity=1;

    }
  


  }
  */
  
  end=(e)=>{
    console.log(88888)
    let me = e.target
    me.style.transition="0.1s";
    me.style.transform="scale(1) rotate(-720deg)";
    me.style.opacity=1;
    this.removeEnd(me,this.end)


  }
  
addEnd(obj,fn){
    // console.log(obj)
    obj.addEventListener('webkitTransitionEnd',fn,false);
    obj.addEventListener('transitionend',fn,false);
}
removeEnd(obj,fn){
    // console.log(obj)

	obj.removeEventListener('webkitTransitionEnd',fn,false);
	obj.removeEventListener('transitionend',fn,false);
}
  dingwei(){
    let num = this.list.length-2
    for (let i = 0; i < this.list.length-1; i++) {
        if(this.off){
            this.list[i].style.bottom = this.gettopleft((i)*(90/num)).top + 'px'
            this.list[i].style.right = this.gettopleft((i)*(90/num)).left + 'px'
            // this.list[i].style.transitionDelay = 
            this.list[i].style.transition='0.5s '+(i*100)+'ms'
            this.list[i].style.WebkitTransform="scale(1) rotate(-720deg)";
            // this.list[i].className = 'zhuan'
        }else{
            this.list[i].style.bottom =  '0px'
            this.list[i].style.right = '0px'
            this.list[i].style.transition='0.5s '+((this.list.length-i-1)*100)+'ms'
            this.list[i].style.WebkitTransform="scale(1) rotate(0deg)";

            // this.list[i].style.transitionDelay = 
            // this.list[i].className = 'daozhuan'
        }
        
        
        // console.log((90/num))
    }
    this.off = !this.off

  }

  render() {
    return (
      <div id="sanxingdaohang" ref="sanxing">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div onClick={this.clckhandle}>6</div>
      </div>
    )
  }
}
