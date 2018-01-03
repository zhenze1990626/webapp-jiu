var flag =true;
$(".zhi").click(function(){
	if(flag){
		$(this).parents(".bill").find(".xiang").css("display","block");
		flag =false ;
	}else{
		$(this).parents(".bill").find(".xiang").css("display","none");
		flag =true;
	}
	
})

$(".integral1").click(function(){
	$(this).addClass("active");
	$(".integral2").removeClass("active");
    $(".box1").css("display","block");
    $(".box2").css("display","none");
})

$(".integral2").click(function(){
	$(this).addClass("active");
	$(".integral1").removeClass("active");
    $(".box1").css("display","none");
    $(".box2").css("display","block");
})
