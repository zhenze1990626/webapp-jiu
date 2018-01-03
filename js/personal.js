
//点击推广，出现二维码
$(".tg").click(function(){
	$(".alert10").css("display","block");
	$(".black3").css("display","block");
	$(window).scroll(function(){
		$(this).scrollTop(0);
	})
})

//点击确定，取消弹框
$(".title3").click(function(){
	$(".alert10").css("display","none");
	$(".black3").css("display","none");
	$(window).unbind(scroll);
})

//当接收到ge=1时，二维码显示
var bb=  localStorage.getItem('ge');
 if(bb==1){
 	$(".alert10").css("display","block");
	$(".black3").css("display","block");
	localStorage.setItem('ge','2');//修改ge的值为2   隐藏二维码
 }




