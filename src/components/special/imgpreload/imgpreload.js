import React, { Component } from 'react'
import './preload.less'

export default class PreLoadImg extends Component {

  
  constructor(props) {
      super(props)
      this.state = {
        imglist:[
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569562175682&di=5c37dc881eb305c789945816a4459352&imgtype=jpg&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151020%2Fmp36648941_1445311232417_4.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569562175204&di=364460d478ca4e2f3d363d589a9c513b&imgtype=0&src=http%3A%2F%2Fwww.ggeye.com%2Fpic%2Fbig%2F1%2F2011728222722.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2938189624,549226912&fm=26&gp=0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569562175198&di=56335c06fc0349040cbeeb2a6891f6ea&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20130113%2FImg363282766.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569562312914&di=37f934d577f03e4750fef4b77864e982&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2Fc%2F66%2F4799568023.jpg_195.jpg'
        ],
        loadnum:0,
        
    }
    this.oimage = new Image()
    // this.num = 0
  }
  
  xunlei(){
    
    this.oimage.src = this.state.imglist[this.state.loadnum]
    this.oimage.onload = ()=>{

        // console.log('eee')
        // this.num ++ 
        
        // console.log(this.state.loadnum++)
        this.setState({
          loadnum:this.state.loadnum + 1
        })
        // this.setState((prevState, props) => ({
        //   loadnum:this.state.loadnum++
          
        // }))
        // console.log('fff')

        if(this.state.loadnum<this.state.imglist.length){
            this.xunlei()
        }

    }


  }
  
  componentDidMount() {
      // console.log(111,this.state.loadnum)
      this.xunlei()
      
  }

  
  render() {
    // console.log('dddd',this.state.loadnum)
    let loadnum = this.state.loadnum
      let len = this.state.imglist.length
    return (
      <div id="preloadimg">
        <p>{`预加载${loadnum} / ${len}`}</p>
        <img  src={this.state.imglist[0]}/>
      </div>
    )
  }
}
