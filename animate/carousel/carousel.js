// 该脚本为草稿，未使用
window.onload = function() {
	// var imgs = document.getElementById('imgs');
	var imgs = document.querySelector('#imgs');
	// console.log(imgs);
	// 添加图片
	for(let i = 1;i < 9;i++) {
		var img = document.createElement('img');
		img.src = `images/banner_0${i}.jpg`;
		imgs.appendChild(img);
	}
	// 图片轮播
	// var num = 0;// 计数
	// var now = 0;// imgs现在的位置
	// var timer = setInterval(function(){
	// 	if(num == 0) now =-7;
	// 	var distance = 0;
	// 	var change = setInterval(function(){
	// 		distance -=3;
	// 		imgs.style.left = now + distance + 'px';
	// 		console.log(distance,now);
	// 		if(distance == -1257){
	// 			// now += distance;
	// 			var now = parseInt(getStyle(imgs,'left'));
	// 			console.log(now);
	// 			clearInterval(change);
	// 		}
	// 	},0.1);
	// 	num++;
	// 	console.log(num);
	// 	if(num == 8) {
	// 		clearInterval(timer);
	// 	// 	var back = setInterval(function(){
 //  //               var speed = (0 - now)/6;
 //  //               speed = speed>0?Math.ceil(speed):Math.floor(speed);
 //  //               console.log(now);
 //  //               if(now == 0){
 //  //                   clearInterval(back);
 //  //               }else{
 //  //                   imgs.style.left = now + speed + "px";
 //  //               }
 //  //           },30);
	// 	}
	// },1000);

	var num = 0;
	var changes = setInterval(function(){
		
		animate(imgs,{left:(-1257*(num+1) - 7)});
		num++;
		if(num == 8) clearInterval(changes);
	},2000);

	



	function animate(obj,json){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var isStop = true;
			for( var attr in json){

				var now = parseInt(getStyle(obj,attr));
	            var speed = (json[attr] - now)/6;
	            speed = speed>0?Math.ceil(speed):Math.floor(speed);
	            // console.log(now);
	            var current = now + speed;
	            	obj.style[attr] = current + "px"; 
	            if(json[attr] !== current){
	            	isStop = false;
	            }
			}
			if(isStop){
				clearInterval(obj.timer);
				// callback&&callback();
			}
		},30);
	}











	function getStyle(obj,attr){
	    if(obj.currentStyle) {
	        return obj.currentStyle[attr];
	    }else{
	        return getComputedStyle(obj,null)[attr];
	    }
	}
	
}