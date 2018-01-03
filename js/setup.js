function gb(){
	$(".home .active .s3").text("默认地址");
}
gb()

//设置默认地址
$(".s3").click(function(){
$(".home h3").removeClass("active");
$(".s3").text("设置为默认地址");
$(this).parents("h3").addClass("active");
gb()
})
//删除
$(".del").click(function(){
	$(this).parents(".home").remove();
})


