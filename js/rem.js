(function(doc,win){
	//获取动态像素比
	var docEl = doc.documentElement,resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function(){
		var clientWidth = docEl.clientWidth;
		if(!clientWidth) return;
		if(clientWidth>=750){
			docEl.style.fontSize = '100px';
		}
		else{
			docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
		}
	};
	if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window);

//底部切换
$(function () {
   $('.index1').on('click',function () {
	   window.location.href="index.html";
   })


   $('.car1').on('click',function () {
       window.location.href="car.html";
   })

   $('.my1').on('click',function () {
       window.location.href="person.html";
   })

})