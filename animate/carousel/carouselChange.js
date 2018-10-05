window.onload = function() {
	var imgs = document.querySelector('#imgs');
	var li = document.getElementsByTagName('li');
	var left = document.querySelector("#left");
	var right = document.getElementById("right");
	circleColor(0);

	// 添加图片
	for(let i = 1;i < 9;i++) {
		var img = document.createElement('img');
		img.src = `images/banner_0${i}.jpg`;
		imgs.appendChild(img);
	}
	var num = 0;// 图片编号
	var changes;// 触发器

	// 图片轮播
	function pic(){
		changes = setInterval(function(){
			if(num == 9) {
				// console.log(num);
				animate(imgs,{left:0});
				num = 0;
				circleColor(num);
			}
			animate(imgs,{left:(-1257*num - 7)});
			circleColor(num++);
			// console.log(num);
			
		},2000);
	}
	pic();

	// 向左切换
	left.onclick = function moveToL(){
		clearInterval(changes);
		if(!num){
			animate(imgs,{left:(-1257*8 - 7)});
			num = 8;
		}else{
			animate(imgs,{left:(-1257*(--num) - 7)})
		}
		circleColor(num);
		pic();
	}

	// 向右切换
	right.onclick = function moveToR(){
		clearInterval(changes);
		if(num == 8){
			animate(imgs,{left:0});
			num = 0;
		}else{
			animate(imgs,{left:(-1257*(++num) - 7)});
		}
		circleColor(num);
		pic();
	}

	// 圆点变色函数
	function circleColor(num) {
		for(let i = 0;i < li.length;i++){
			li[i].style.backgroundColor = "#000";
		}
		li[num].style.backgroundColor = "#fff";
	}

	// 点击圆点切换
	for(let i = 0;i < li.length;i++) {
		li[i].onclick = function(){
			// console.log(i);
			clearInterval(changes);
			num = i;
			// console.log(num);
			if(!num) animate(imgs,{left:0});
			else animate(imgs,{left:(-1257*num - 7)});
			circleColor(num);
			pic();
		}
	}

	// 图片切换函数
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
			if(isStop) clearInterval(obj.timer);
		},30);
	}

	// 获取元素的style属性
	function getStyle(obj,attr){
	    if(obj.currentStyle) {// IE
	        return obj.currentStyle[attr];
	    }else{
	        return getComputedStyle(obj,null)[attr];
	    }
	}
	
}