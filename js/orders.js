//切换待付款 待收货状态
$(".nav ul li").click(function() {
	var i = $(this).index();

	$(this).addClass("active").siblings().removeClass("active");
	$(this).parents(".section").find(".order").eq(i).addClass("active2").siblings().removeClass("active2");
	if(i == 0) {
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".section").find(".order").addClass("active2");
		$(".code").hide();
	}
	if(i == 1) {
		$(".code").show();
	}

})

//初始显示所有状态
function activeAll() {
	$(".order").addClass("active2");
}
activeAll();

//隐藏结算
$(".code").hide();

//延迟收货
$(".yan").click(function() {
	$(".alert10").css("display", "block");
	$(".black3").css("display", "block");
	$(window).scroll(function() {
		$(this).scrollTop(0);
	})
})

//取消延迟收货
$(".alert10 h4 span").eq(0).click(function() {
	$(".alert10").css("display", "none");
	$(".black3").css("display", "none");
	$(window).unbind(scroll);
})

//确定延迟收货

$(".alert10 h4 span").eq(1).click(function() {
	$(".alert10").css("display", "none");
	$(".black3").css("display", "none");
	$(window).unbind(scroll);
})

//查看物流
$(".cha").click(function() {
	window.location.href = "logistics.html";
})

//联系客服
$(".lian").click(function() {
	$(".alert11").css("display", "block");
	$(".black3").css("display", "block");
})
//关闭弹窗
$(".alert11 h4 span").click(function() {
	$(".alert11").css("display", "none");
	$(".black3").css("display", "none");
})

// 点击全选按钮
$("#AllCheck").on('click', function() {

	if($(this).prop("checked") == true) { //如果全选按钮被选中
		$(".goods").prop('checked', true); //所有按钮都被选中

	} else {
		$(".goods").prop('checked', false); //else所有按钮不全选

	}
	TotalPrices();
});

// 点击店铺按钮
$(".shopCheck").on('click', function() {
	if($(this).prop("checked") == true) { //如果店铺按钮被选中

		if($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
			$("#AllCheck").prop('checked', true); //全选按钮被选中

		} else {
			$("#AllCheck").prop('checked', false); //else全选按钮不被选中

		}
	} else { //如果店铺按钮不被选中

		$("#AllCheck").prop('checked', false); //全选按钮也不被选中

	}
	TotalPrices();
});

//计算每个店铺的数量  价格
function TotalPrice() {
	//  	var allprice = 0; //总价
	$(".fu .shop").each(function() { //循环每个店铺
		var oprice = 0; //店铺总价
		var n = 0; //店铺商品数量

		$(this).find(".shop2").each(function() { //循环店铺里面的商品

			var num = parseInt($(this).find(".nu").text()); //得到商品的数量

			//                  console.log(num);
			var price = parseFloat($(this).find("h3 i").text()); //得到商品的单价

			var total = price * num; //计算单个商品的总价
			oprice += total; //计算该店铺的总价
			n += num;

		});
		var oneprice = parseFloat(oprice.toFixed(2)); //得到每个店铺的总价

		$(this).closest('.car-goods').find('.code2-text em').text(oneprice.toFixed(2));
		//  		allprice += oneprice; //计算所有店铺的总价
		$(this).find(".money p span").text(n);
		$(this).find(".money p b").text(oneprice);

	});

	//  	$("#price").text(allprice.toFixed(2)); //输出全部总价

}
TotalPrice();

//计算总价
function TotalPrices() {
	var allprice = 0; //总价
	$(".fu .shop").each(function() { //循环每个店铺
		var oprice = 0; //店铺总价

		$(this).find(".shop2").each(function() { //循环店铺里面的商品

			var che = $(this).parents(".shop").find(".shopCheck").is(":checked");

			if(che) {
				var num = parseInt($(this).find(".nu").text()); //得到商品的数量

				//    				                  console.log(num);
				var price = parseFloat($(this).find("h3 i").text()); //得到商品的单价

				var total = price * num; //计算单个商品的总价
				oprice += total; //计算该店铺的总价
			}

		});
		var oneprice = parseFloat(oprice.toFixed(2)); //得到每个店铺的总价

		$(this).closest('.car-goods').find('.code2-text em').text(oneprice.toFixed(2));
		allprice += oneprice; //计算所有店铺的总价

	});

	$("#price").text(allprice.toFixed(2)); //输出全部总价

}

//点击取消订单，删除当前商店和旗下的商品
$(".xiao").click(function() {
	$(this).parents(".shop").remove();
})

//点击付款
$(".pay").click(function() {
	var num = $(this).parents(".money").find("p span").text(); //当前商店的商品数量
	var onePrice = $(this).parents(".money").find("p b").text(); //当前商店的商品价格

	//ajax
	$.ajax({
		type: "POST",
		url: "http://wx.9leding.com/text",
		dataType: "html",

		data: {
			"price": price,
			"num": num
		},
		success: function(data) {
			console.log(data);
		}
	});
})

//点击合并付款
$(".layout").click(function() {
	var allPrice = $(this).parents(".code").find("#price").text(); //总价
	$.ajax({
		type: "POST",
		url: "http://wx.9leding.com/text",
		dataType: "html",
		data: {
			"allPrice": allPrice
		},
		success: function(data) {
			console.log(data);
		}
	});

})