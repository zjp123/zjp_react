import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './qingchu.less'

export default class Qingchu extends Component {
  
  state = {
      divnum:(()=>{
          let arr = []
          for (let i = 0; i < 100; i++) {
              
              arr.push({index:i, ishover:false})
          }
          return arr
      })(),
    //   targetnum:null
  }
  hoverHandle(e){
    // console.log(e.target)
    let node = ReactDOM.findDOMNode(e.target)
    let num = parseInt(node.innerHTML)
    let temarr = this.state.divnum.map((v)=>{
        if(v.index==num){
            // console.log(v.index)

             v.ishover = true
             return v
        }else{
            return v
        }
    })
    // console.log(temarr)
    this.setState({
        divnum:temarr
    })
  }
  render() {
    //   let targetnum = this.state.targetnum
    // console.log(this.state.divnum)
    return (
      <div className="qingchu" onMouseOver={this.hoverHandle.bind(this)}>
            
            {this.state.divnum.map((v, i)=>{

                return <Itemdiv ishover={v.ishover}  index={v.index}  key={v.index}/>

            })}
      </div>
    )
  }
}



function Itemdiv(props) {
    // console.log(props)
    let i = props.index
    let ishover = props.ishover
    // console.log(this.props)
    let left = 0, top= 0
    left = i%10*50
    top = Math.floor(i/10) * 50
    
    return (
        <div className={ishover?'overactive':''} style={{left:left,top:top}}>{i}</div>
    )
    
}