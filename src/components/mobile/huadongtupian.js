import React, { Component } from 'react'
import './huadong.less'

export default class Huadongtu extends Component {
    constructor(props) {
        super(props)
        (function () {
            let width = document.documentElement.clientWidth
            let fontSize = width/16
            document.documentElement.style.fontSize = fontSize + 'px'
        })()
        // document.addEventListener('contextmenu', function (e) {
        //     e.preventDefault()
        // },false)
        document.addEventListener('touchstart', function (e) {
            e.preventDefault()
        },{ passive: false })
    }
    
  componentDidMount() {
    var list = document.getElementById('list')
    var tag = document.getElementById('tag')
    var pagex = 0
    var listx = 0
    var movex = 0
    var screenwidth = document.documentElement.clientWidth
    var inow = 0 //下标active
    var inow2 = 0//配合计算left值
    function tagtap() {
        
        console.log(tag.children[inow],inow)
        for (let j = 0; j < tag.children.length; j++) {
                    tag.children[j].className=''
                    
                }
        tag.children[inow].className='active'
        
    }
    for (let i = 0; i < list.children.length; i++) {
        // console.log(list.children[i])
        list.children[i].index = i
    }
    list.addEventListener('touchstart',function (e) {
        var index = e.target.parentNode.index

        var touch = e.changedTouches[0]
        pagex = touch.clientX
        listx = this.offsetLeft
        // console.log(e.target.parentNode.index)
        this.style.transition = 'none'
        if(index==list.children.length-1){
            // alert('ooo')
            console.log(tag.children[0])
            this.children[0].style.position='relative'
            this.children[0].style.left=list.children.length*screenwidth + 'px'
        }
        if(index==0){
            // alert('ooo')
            console.log(tag.children[0])
            this.children[list.children.length-1].style.position='relative'
            this.children[list.children.length-1].style.left= -(list.children.length)*screenwidth + 'px'
        }
    },false)
    list.addEventListener('touchmove',function (e) {
        var touch = e.changedTouches[0]
        movex = touch.clientX-pagex
        this.style.left = movex + listx + 'px'

    },false)
    list.addEventListener('transitionend',function () {
        // console.log('eee')
        // if(inow==tag.children.length){
        //     console.log(99999)
        //     list.children[0].style.left= '0px'
        //     this.style.left = '0px'
        //     inow=0
        //     // tagtap()

        // }
        if(inow2==1){
            list.children[tag.children.length-1].style.left= '0px'
            list.children[0].style.left= '0px'


        }
        // if(inow2==1){
        //     list.children[tag.children.length-1].style.left= '0px'

        // }
        if(inow2==tag.children.length){
            inow2=0
            list.style.transition = 'none'

            list.children[0].style.left= '0px'
            this.style.left = '0px'
                   
        }
        if(inow2<0){
            inow2=tag.children.length-1
            list.style.transition = 'none'

            list.children[tag.children.length-1].style.left= '0px'
            this.style.left = -(tag.children.length-1)*screenwidth + 'px'
        }
        // if(inow2==-1){
        //     inow2=tag.children.length
        //     list.style.transition = 'none'

        //     list.children[0].style.left= tag.children.length
        //     this.style.left = '0px'
                   
        // }
        // tagtap()
                  
    },false)
    list.addEventListener('touchend',function (e) {
        // console.log(movex)
        var touch = e.changedTouches[0]
        var index = e.target.parentNode.index
        this.style.transition = '.5s'
        if(movex<0){//左移
            if(Math.abs(movex)<screenwidth/2){
            // console.log(Math.abs(movex),888)

                this.style.left = -inow*screenwidth + 'px'
                // tag.children[0].style.left= '0px'
            }else{
                inow2++
                inow++
                if(inow==tag.children.length){
                    inow=0

                }
                this.style.left = -(inow2)*screenwidth + 'px'
                // tag.children[0].style.left= '0px'
                // this.style.left = '0px'
                
                // if(inow2==tag.children.length+1){
                //     inow2=0
                   
                // }
                // console.log(inow2)
                tagtap()

               


            }
        }else{//右移
            // tag.children[0].style.left= '0px'

            if(Math.abs(movex)<screenwidth/2){
            // console.log(Math.abs(movex),888)

                this.style.left = -inow2*screenwidth + 'px'
            }else{
                this.style.left = -(inow2-1)*screenwidth + 'px'

                inow2--
                inow--
                if(inow<0){
                    inow=tag.children.length-1

                }
                // if(inow2<0){
                //     inow2=tag.children.length
                // }
                tagtap()



            }
        }
        
        
    },false)
  }
  
  render() {
    return (
        <div id="wrap">
        
                <ul id="list">
              
                    <li>
                        <img src="./images/1.jpg" />
                    </li>
                    <li>
                        <img src="./images/2.jpg"/>

                    </li>
                    <li>
                        <img src="./images/3.jpg"/>

                    </li>
                    <li>
                        <img src="./images/4.jpg"/>
                    </li>
                </ul>
                <ul id="tag">
                    <li class="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>

        </div>
    )
  }
}
