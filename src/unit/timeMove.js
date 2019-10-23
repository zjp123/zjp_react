

import {Tween } from './tween'
function getStyle(obj,attr) {
    
    if(obj.currentStyle){
        return obj.currentStyle[attr]
    }else{
        return getComputedStyle(obj,false)[attr]
    }

}

function now() {
    return (new Date()).getTime()
}

function timeMove(obj,json,type,zitype,time,fn) {
    
    let icur = {}
    let startTime = now()
    for (let attr in json) {
        if(attr=='opacity'){
            icur[attr] = Math.round(getStyle(obj,attr)*100)
        }else{
            icur[attr] = parseInt(getStyle(obj,attr))

        }
    }
    clearInterval(obj.timer)

    obj.timer = setInterval(() => {
        let endTime = now()
		let t = time - Math.max(0, startTime-endTime + time)
		// var scale = 1-Math.max(0,startTime + times - changeTime)/times; //2000 - 0 -> 1-0 -> 0-1

        for (let key in json) {
			//t*scale
            let value = Tween[type][zitype](t,icur[key], json[key]-icur[key],time )

            if(key=='opacity'){
                obj.style.opacity = value/100
                obj.style.filter = `alpha(opacity=${value})`
            }else{
                obj.style[key] = value + 'px'
            }
        }
        // console.log('time', t)
        //scale==1
        if(t>=time){
            clearInterval(obj.timer)
            if(fn){
                // console.log(999)
                alert(99)
                fn.call(this)
            }
        }

        
    }, 13);



}
function startMove(obj,json,times,type,zitype,fn){
	
	if( typeof times == 'undefined' ){
		times = 400;
		type = 'linear';
	}
	
	if( typeof times == 'string' ){
		if(typeof type == 'function'){
			fn = type;
		}
		type = times;
		times = 400;
	}
	else if(typeof times == 'function'){
		fn = times;
		times = 400;
		type = 'linear';
	}
	else if(typeof times == 'number'){
		if(typeof type == 'function'){
			fn = type;
			type = 'linear';
		}
		else if(typeof type == 'undefined'){
			type = 'linear';
		}
	}
	
	var iCur = {};
	
	for(var attr in json){
		iCur[attr] = 0;
		
		if( attr == 'opacity' ){
			iCur[attr] = Math.round(getStyle(obj,attr)*100);
		}
		else{
			iCur[attr] = parseInt(getStyle(obj,attr));
		}
		
	}
	
	var startTime = now();
	
	clearInterval(obj.timer);
	
	obj.timer = setInterval(function(){
		
		var changeTime = now();
		
		var t = times - Math.max(0,startTime - changeTime + times);  //0到2000
		
		for(var attr in json){
			
            // var value = Tween[fx](t,iCur[attr],json[attr]-iCur[attr],times);
            let value = Tween[type][zitype](t,iCur[attr], json[attr]-iCur[attr],times )
            
			
			if(attr == 'opacity'){
				obj.style.opacity = value/100;
				obj.style.filter = 'alpha(opacity='+value+')';
			}
			else{
				obj.style[attr] = value + 'px';
			}
			
		}
		
		if(t == times){
			clearInterval(obj.timer);
			if(fn){
				fn.call(obj);
			}
		}
		
	},13);
	
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}
		else{
			return getComputedStyle(obj,false)[attr];
		}
	}
	
	function now(){
		return (new Date()).getTime();
	}
	
}

export {timeMove, startMove}