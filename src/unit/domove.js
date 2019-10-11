
function getStyle(obj,attr) {
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr]
}


function doMove(obj,attr,speed,target,callback) {
    /*
      attr ---哪个属性
      speed---步长
      target--- 什么位置
    */
//    if(obj.timer){
//        clearInterval(obj.timer)
//    }
    
    clearInterval(obj.timer)
    //如果属性是opacity的话  那就要考虑小数的影响
    let temtarget = parseInt(getStyle(obj,attr))
    if(temtarget<=target){
        speed = 1*speed
    }else{
        speed = -1*speed
    }
    obj.timer = setInterval(() => {

        temtarget += speed
        if(temtarget>=target&&speed>0){
            temtarget = target
        }
        if(temtarget<=target&&speed<0){
            temtarget = target

        }
        obj.style[attr] = temtarget + 'px'

        if(temtarget==target ){

            clearInterval(obj.timer)
            callback&&callback()

        }
        

    }, 30);


}

function shake(obj,attr, num,callback) {
    var arr = []
    for (var i = num||20 ; i > 0; i-=2) {
        arr.push(i,-i)
        
    }
    arr.push(0)
    var num = 0
    // clearInterval(obj.timer)
    if(obj.timer!=null){
        return ;
    }
    var tem = parseInt(getStyle(obj,attr))
    obj.timer = setInterval(function () {
        obj.style[attr] = tem + arr[num] + 'px'
        num++
        if(num==arr.length){
            clearInterval(obj.timer)
            obj.timer = null
            callback&&callback()
        }
    },30)
}

function drag(obj) {

    //记住e.clientX 是相对于屏幕的，如果obj的外层还有一个父元素包裹的话  就要考虑到父元素的影响比如父元素的
    //offsetLest 等
    obj.onmousedown= function (e) {
        var e = e || e.event
        let disx = e.clientX - obj.offsetLeft
        let disy = e.clientY - obj.offsetTop
        // console.log(obj.offsetParent)

        /* 拖拽某一边的附近位置 改变元素大小 */
        // assume 鼠标距离元素某一边 10px的位置按下

        let distBorder = 10
        let downx = e.clientX // 鼠标刚按下的距离
        let dir = ''
        let startwidth = obj.offsetWidth
        let parLeft = obj.offsetParent.offsetLeft //父级的left值
        //如果在距离右边10px以内距离按下
        console.log(e.clientX - downx)
        if( e.clientX - parLeft > (obj.offsetLeft + obj.offsetWidth -10) ){
            dir = 'right'            
        }
        if( e.clientX - parLeft < (obj.offsetLeft +  10) ){
            dir = 'left'            
        }

        /*限定超出父级的范围 start*/
        let MaxparentLeft = obj.offsetParent.offsetLeft
        let MaxparentTop = obj.offsetParent.offsetTop
        let MaxparentRight = obj.offsetParent.offsetWidth - obj.offsetWidth
        let MaxparentBottom = obj.offsetParent.offsetHeight - obj.offsetHeight

        /*限定超出父级的范围 end*/

        document.onmousemove=function (e) {//当从div快速移除时
            var e = e || e.event
            let lastx = e.clientX - disx
            let lasty = e.clientY - disy
            // console.log(lastx,lasty,MaxparentLeft,MaxparentTop)

            switch (dir) {
                case 'right':
                    obj.style.width =  startwidth + (e.clientX - downx) + 'px'
                    
                    break;
                case 'left':
                    obj.style.width =  startwidth + (e.clientX - downx) + 'px'
                    
                    break;
            
                default:
                    break;
            }
           
            //还可以做碰撞检测  就是两个元素的4个边的大小比较
            /* 限定超出 父级的范围*/
            if(lastx<0){//磁性吸附 把0改为100 再加上transition效果
                lastx = 0
                
            }
            if(lastx>MaxparentRight){
                lastx = MaxparentRight
            }
            if(lasty<0){
                lasty = 0
            }
            if(lasty>MaxparentBottom){
                lasty = MaxparentBottom
            }
            /* 限定超出 父级的范围 end*/

            obj.style.left = lastx + 'px'
            obj.style.top =  lasty + 'px'

            
        }
        document.onmouseup=function (e) {
            var e = e || e.event

            if(obj.releaseCapture){
                obj.releaseCapture()
            }
            document.onmousemove = document.onmouseup = null
            
        }
        if(obj.setCaputure){//兼容ie
            obj.setCaputure()
        }
        return false //阻止浏览器默认的选择拖拽行为

        
    }
    
}



function mousewheelfn(e) {
    let b= true //向上滚
    var e = e||event
    if(e.wheelDelta){//ie chrome
        b = e.wheelDelta>0?true:false
    }
    if(e.detail){//firhole
        b = e.detail<0?true:false
    }
    if(b){//向上滚动

    }else{


    }
    if(e.preventDefault){
        e.preventDefault()
    }

    return false //阻止默认事件 阻止obj.事件名称 = fn形式触发的默认事件
}

function setCookie(key,value,t) {
    var time = new Date()
    time = time.getDate() + t
    time = time.toLocaleString()
    document.cookie = `${key}=${encodeURI(value)};expire=${time}`
}

function getCookie(key) {
    var arr = document.cookie.split('; ')
    for (let i = 0; i < arr.length; i++) {
        let arr1 = arr[i].split('=')
        if(arr1[0]==key){
            return decodeURI(arr1[1])
        }
        
    }
}
function romoveCookie(key) {
    setCookie(key, '' ,-1)
}

window.$=HTMLElement.prototype.$=function(selector){
    var elems=(this==window?document:this)
        .querySelectorAll(selector);
    return elems.length==0?null:elems.length==1?elems[0]:elems;
}

export {drag, doMove, shake, mousewheelfn}