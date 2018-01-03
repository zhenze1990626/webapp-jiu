function cssTransform(el,attr,val) {
	if(arguments.length>2) {
		el.transform[attr] = val;
		var sVal = "";
		for(var s in el.transform){
			switch(s) {
				case "rotate":
				case "skewX":
				case "skewY":
					sVal +=s+"("+el.transform[s]+"deg) ";
					break;
				case "translateX":
				case "translateY":
				case "translateZ":
					sVal +=s+"("+el.transform[s]+"px) ";
					break;
				case "scaleX":
				case "scaleY":
				case "scale":
					sVal +=s+"("+el.transform[s]+") ";
					break;	
			}
			el.style.WebkitTransform = el.style.transform = sVal;
		}
	} else {
		val  = el.transform[attr];
		if(typeof val == "undefined" ) {
			if(attr == "scale" || attr == "scaleX" || attr == "scaleY"  ) {
				val = 1;
			} else {
				val = 0;
			}
		}
		return val;
	}
}
function mscroll(wrap,callBack) {
	var child = wrap.children[0]; 
	var startPoint = 0;
	var startY = 0;
	var minY = wrap.clientHeight - child.offsetHeight;
	var step = 1;
	var lastY = 0; 
	var lastTime = 0;
	var lastDis = 0;
	var lastTimeDis = 1;
	var isMove = true;
	var isFirst = true;
	var Tween = {
		easeOut: function(t, b, c, d){
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		backOut: function(t, b, c, d, s){
			if (typeof s == 'undefined') {
				s = 1.70158;  
			}
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		} 
	};
	cssTransform(child,"translateZ",0.01);
	wrap.addEventListener(
		'touchstart', 
		function(e) {
			minY = wrap.clientHeight - child.offsetHeight;
			clearInterval(child.scroll);
			if(callBack&&callBack.start){
				callBack.start();
			}
			startPoint = {pageY:e.changedTouches[0].pageY,pageX:e.changedTouches[0].pageX};
			startY = cssTransform(child,"translateY");
			step = 1;
			lastY = startPoint.pageY;
			lastTime = new Date().getTime();
			lastDis = 0;
			lastTimeDis = 1;
			isMove = true;
			isFirst = true;
		}
	);
	wrap.addEventListener(
		'touchmove', 
		function(e) {
			if(!isMove) {
				return ;
			}
			var nowPoint = e.changedTouches[0];
			var disX = nowPoint.pageX - startPoint.pageX;
			var disY = nowPoint.pageY - startPoint.pageY;
			if(isFirst) {
				isFirst = false;
				if(Math.abs(disY) < Math.abs(disX)) {
					isMove = false;
					return ;
				}
			}
			var t = startY + disY;
			var nowTime = new Date().getTime();
			if(t > 0) {
				step = 1-t / wrap.clientHeight; 
				t = parseInt(t*step);
			}
			if(t < minY) {
				var over = minY - t; 
				step = 1-over / wrap.clientHeight;
				over = parseInt(over*step);
				t = minY - over;
			}
			lastDis = nowPoint.pageY - lastY; 
			lastTimeDis = nowTime - lastTime; 
			lastY = nowPoint.pageY;
			lastTime = nowTime;
			cssTransform(child,"translateY",t);
			if(callBack&&callBack.in){
				callBack.in();
			}
		}
	);
	wrap.addEventListener(
		'touchend', 
		function (){
			var speed = (lastDis/lastTimeDis)*120; 
			speed = isNaN(speed)?0:speed;
			var t = cssTransform(child,"translateY");
			var target = t + speed; 
			var type = "easeOut";
			var time = Math.abs(speed*.9);
			time = time<300?300:time;
			if(target > 0) {
				target = 0;
				type ="backOut";
			}
			if(target < minY) {
				target = minY;
				type ="backOut";
			}
			move(target,time,type);
			if(callBack&&callBack.end){
				callBack.end();
			}
		}
	);
	/*
		start 手指按下
		in 滑动中
		end 手指抬起
		over 滑动结束
	*/
	function move(target,time,type) {
		var t = 0;
		var b = cssTransform(child,"translateY");
		var c = target - b;
		var d = Math.ceil(time/20);
		clearInterval(child.scroll);
		child.scroll = setInterval(
			function() {
				t++;
				if(t > d) {
					clearInterval(child.scroll);
					if(callBack&&callBack.over){
						callBack.over();
					}
				} else {
					var top = Tween[type](t,b,c,d);
					cssTransform(child,"translateY",top);
					if(callBack&&callBack.in){
						callBack.in();
					}
				}
			},20
		);
	}
}
function getDistance(p1, p2) {
	var x = p1.pageX - p2.pageX;
	var y = p1.pageY - p2.pageY;
	return Math.sqrt(x*x + y*y);
}
function getAngle(p1, p2){
	var x = p1.pageX - p2.pageX;
	var y = p1.pageY - p2.pageY;
	return Math.atan2(y, x)*180/Math.PI;
}
function gesture(el,callBack){
	var isGesture = false;
	var start = {};
	el.addEventListener(
		"touchstart",
		function(e) {
			if(e.touches.length >= 2){
				isGesture = true;
				start.dis = getDistance(e.touches[0], e.touches[1]); 
				start.deg = getAngle(e.touches[0], e.touches[1]);
				if(callBack&&callBack.start){
					callBack.start.call(el,e);
				}
			}
		}
	);
	el.addEventListener(
		"touchmove",
		function(e){
			if(e.touches.length >= 2 && isGesture){
				var dis = getDistance(e.touches[0], e.touches[1]); 
				var deg =  getAngle(e.touches[0], e.touches[1]);
				e.scale = dis/start.dis;
				e.rotation = deg - start.deg;
				if(callBack&&callBack.change){
					callBack.change.call(el,e);
				}
			}
		}
	);
	el.addEventListener(
		"touchend",
		function(e){
			if(isGesture){
				if(callBack&&callBack.end){
					callBack.end.call(el,e);
				}
			}
			isGesture = false;
		}
	);
}