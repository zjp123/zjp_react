import React, { Component } from 'react'
import './anxuload.less'

export default class AnxuLoad extends Component {

  constructor(props) {
      super(props)
      this.cacheimg = {}

      
  }
  componentDidMount() {
      let nodes = this.refs.anxuinglist.childNodes
      
      console.log(this.refs.anxuinglist.childNodes[0].children[0].getAttribute('_src'))
    //   console.log(this.refs.anxuinglist.childElementCount)
    //   console.log(this.refs.anxuinglist.children)
    //   console.log(this.refs.anxuinglist.childNodes)
      window.addEventListener('scroll',()=>{
    //   console.log('ggggg1')

        let scrolldist = document.documentElement.scrollTop || document.body.scrollTop
        let clientHeight = document.documentElement.clientHeight
        let len = Object.keys(this.cacheimg).length
        if(len==nodes.length){
        //    console.log('ggggg2',len)

            return ;
        }
          for (let i = 0; i < nodes.length; i++) {
        //    console.log((!this.cacheimg[i] && ( scrolldist + clientHeight > this.getTop(nodes[i]))))
              

              if(!this.cacheimg[i] && ( scrolldist + clientHeight > this.getTop(nodes[i])) ){
                this.cacheimg[i] = true

                //   console.log('hhhh')
                nodes[i].children[0].src = nodes[i].children[0].getAttribute('_src')
              }

              
          }
      },false)
  }

  getTop(obj) {
    var iTop = 0;
    while(obj) {
        iTop += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return iTop;
  }
  render() {
    return (
      <div id="anxudiv">
        <p>按需加载</p>
        <ul id="anxuul" ref="anxuinglist">
            <li><img src={require('../../../imgs/loading.gif')} _src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569562175682&di=5c37dc881eb305c789945816a4459352&imgtype=jpg&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151020%2Fmp36648941_1445311232417_4.jpg" alt=""/></li>
            <li><img src={require('../../../imgs/loading.gif')} _src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2938189624,549226912&fm=26&gp=0.jpg" alt=""/></li>
            <li><img src={require('../../../imgs/loading.gif')} _src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569562175204&di=364460d478ca4e2f3d363d589a9c513b&imgtype=0&src=http%3A%2F%2Fwww.ggeye.com%2Fpic%2Fbig%2F1%2F2011728222722.jpg" alt=""/></li>
            <li><img src={require('../../../imgs/loading.gif')} _src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569562175198&di=56335c06fc0349040cbeeb2a6891f6ea&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20130113%2FImg363282766.jpg" alt=""/></li>
            <li><img src={require('../../../imgs/loading.gif')} _src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569562312914&di=37f934d577f03e4750fef4b77864e982&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2Fc%2F66%2F4799568023.jpg_195.jpg" alt="" /></li>
        </ul>
      </div>
    )
  }
}
