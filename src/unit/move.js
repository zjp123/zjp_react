//支持opacity 兼容ie 多个属性同时运动

function css(obj, attr) {
    if(obj.currentStyle){
        return obj.currentStyle[attr]
    }else{
        return getComputedStyle(obj, false)[attr]
    }
}

//单个属性
function move(obj,attr,target,speed){

    clearInterval(obj.timer)
    // let itarget = 0
    let kaiguan = true
    let icur = 0
    obj.timer = setInterval(()=>{

        for (const key in jsonattr) {
           
            if(attr=='opacity'){
                icur = Math.round(css(obj, 'opacity') * 100)
                // icur += speed
                // if(icur!=obj[key]*100){
                //     kaiguan = false
                    
                // }
                // obj.style.opacity = icur /100
                // obj.style.filter =  'alpha(opacity='+(icur)+')'
            }else{

                icur = parseInt(css(obj, attr))
                // ocur += speed
                // if(icur!=obj[key]){
                //     kaiguan = false
                // }
                // obj.style[attr] = ocur + 'px'
                
            }
            // if(icur==target){
            //     clearInterval(obj.timer)

            // }else{
            //     if(attr=='opacity'){
                    
            //         obj.style.opacity = (icur + speed) /100
            //         obj.style.filter =  'alpha(opacity='+(icur + speed)+')'
            //     }else{
                    
            //         obj.style[attr] = (icur + speed) + 'px'
            //     }
            // }
           
            if(attr=='opacity'){
                if(icur ==target*100){
                    clearInterval(obj.timer)

                }
                obj.style.opacity = (icur + speed) /100
                obj.style.filter =  'alpha(opacity='+(icur + speed)+')'
            }else{
                if(icur ==target){
                    clearInterval(obj.timer)

                }
                obj.style[attr] = (icur + speed) + 'px'
            }
            


        }
        

    },30)

}
//多个属性同时运动
function moreAttrMove(obj,attrobj){

    clearInterval(obj.timer)
    let icur = 0
    let kaiguan = true
    let speed = null
    obj.timer = setInterval(() => {


        for (const key in attrobj) {
            let target = attrobj[key]
            if(key=='opacity'){

                icur = Math.round(css(obj, 'opacity') * 100)
               
            }else{

                icur = parseInt(css(obj, attr))
              
            }
            //加入缓冲动画
            speed = (target - icur) /8
            speed = speed>0?Math.ceil(speed):Math.floor(speed)

            if(key=='opacity'){
                if(icur !==target*100){
                    kaiguan = false
                }
                obj.style.opacity = (icur + speed) /100
                obj.style.filter =  'alpha(opacity='+(icur + speed)+')'
            }else{
                if(icur ==target){
                    kaiguan = false
                }
                obj.style[attr] = (icur + speed) + 'px'
            }
        }

        if(kaiguan){// 全部属性都达到了目标点
            clearInterval(obj.timer)

        }



    }, 30)
    

}

//缓冲运动就是把传入的速度 递减 speed *= 0.8==>speed =speed>0 ?Math.ceil((target-obj.offsetLeft)/8):Math.floor((target-obj.offsetLeft)/8)


//有时运动之前元素属性需要初始化
function huancong(obj,attr,target) {
    
    clearInterval(obj.timer)
    speed = speed>0?Math.ceil((target-obj.offsetLeft)/8):Math.floor((target-obj.offsetLeft)/8)
    obj.timer = setInterval(() => {
        let icur = parseInt(css(obj,attr))
        if(icur==target){
            clearInterval(obj.timer)

        }
        obj.style[attr] = icur + speed + 'px'
    }, 30)
    
}