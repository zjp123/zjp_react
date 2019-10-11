import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './topdiv.less'

export default class Vdiv extends Component {
    state = {
        isshow:true,
    }
    showdiv(){
        this.setState({
            isshow: !this.state.isshow
        })
    }
    render() {
        return (
            <div className="divrap">
                <button onClick={this.showdiv.bind(this)}>点击</button>
                {/* <div id="" ref="divlist"></div> */}
                {this.state.isshow?<Divitem  itemnum={5}/>:''}
            </div>
        )
    }
}

function Idiv(props) {
    // console.log(props)
    let i = props.index
    // console.log(this.props)
    let left = 0
    let right = 0
    left = i*50 + 'px'
    if(i<2){
        right = i*50 + 'px'
    }else{
        right = 200-i*50 + 'px'
    }
    return (
        <div style={{left:left,top:right}}>{i}</div>
    )
    
}

class Divitem extends Component {
   
    componentDidMount() {
    }
    
  render() {
    // this.adddiv()
    return (
      <div id="divlist" 
    //   ref={child => this.childrendiv = child}
        ref = "childrendiv"
      >
      {
          Array.from(new Array(this.props.itemnum)).map((v,i)=>{
                return <Idiv index={i} key={i}/>
          })
      }

      </div>
    )
  }
}

