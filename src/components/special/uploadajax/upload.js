import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './upload.less'

export default class Upload extends Component {
  loadfile(ev){
    console.log(ev.target.files)
  }
  componentDidMount() {
      
  }
  ajax(file){
      const promisehandle = new  Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        let data = null
        let upload = xhr.upload
        data = new FormData()
        data.append('file',file)
        xhr.open('post','', true)
        xhr.setRequestHeader('X-Request-With', 'XMLHttpRequest')
        xhr.send(data)
        xhr.onload = function (res) {//上传成功
            resolve(res)
        }
        xhr.onerror=function (err) {
            reject(err)
        }
        upload.onprogress=function (e) {//上传进度
            //e.total 
            //e.loaded
        }
      });

      return promisehandle
      
      
  }
  shangchuan(){
     let oload = ReactDOM.findDOMNode(this.refs.upload)
     let files = oload.files
     for (let i = 0; i < files.length; i++) {
        this.ajax(files[i]).then(function (json) {
            console.log(json)
        },function (err) {
            console.log(err)
        })
     }
  }
  render() {
    return (
      <div id="uploadbox">
            <div>
                <input type="file" ref="upload" onChange={this.loadfile.bind(this)} multiple={true}/>
                <input type="button" id="btn" value="上传" onClick={this.shangchuan.bind(this)}/>
            </div>
            <div className="onprogress">
                <div className="div1"></div>
                <div className="div2">0%</div>
            </div>
      </div>
    )
  }
}
