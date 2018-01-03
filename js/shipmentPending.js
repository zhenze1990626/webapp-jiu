$(".returnGoods span").click(function(){
	var orderNum = $(".orderNum span").text();
		$.ajax({

data:{"orderNum":orderNum},

});
})
