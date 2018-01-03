    // 点击全选按钮
    $("#AllCheck").on('click', function() {

    	if($(this).prop("checked") == true) { //如果全选按钮被选中
    		$(".goods").prop('checked', true); //所有按钮都被选中

    	} else {
    		$(".goods").prop('checked', false); //else所有按钮不全选

    	}

    	var num = $(".goods-check:checked").length;
    	$(".layout em").text(num);
    	TotalPrice();

    });

    // 点击店铺按钮
    $(".shopCheck").on('click', function() {
    	if($(this).prop("checked") == true) { //如果店铺按钮被选中

    		$(this).parents(".shop").find(".goods-check").prop('checked', true); //店铺内的所有商品按钮也被选中
    		if($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
    			$("#AllCheck").prop('checked', true); //全选按钮被选中

    		} else {
    			$("#AllCheck").prop('checked', false); //else全选按钮不被选中

    		}
    	} else { //如果店铺按钮不被选中

    		$(this).parents(".shop").find(".goods-check").prop('checked', false); //店铺内的所有商品也不被全选
    		$("#AllCheck").prop('checked', false); //全选按钮也不被选中

    	}
    	var num = $(this).parents(".section").find(".goods-check:checked").length;
    	$(".layout em").html(num);
    	TotalPrice();

    });

    // 点击商品按钮
    $(".goods-check").click(function() {
    	var m = $(this).parents(".shop").find(".shop2 .goods-check").length; //当前店铺商品的数量
    	var n = $(this).parents(".shop").find(".shop2 .goods-check:checked").length; //当前店铺选中的数量
    	if(m == n) { //如果商品的数量=选中的数量
    		$(this).parents(".shop").find(".shopCheck").prop("checked", true); //该店铺按钮选中
    	} else {
    		$(this).parents(".shop").find(".shopCheck").prop("checked", false); //否则就不选中
    	}

    	var num = $(".goods-check").length; //所有商品的数量
    	var num2 = $(".goods-check:checked").length; //所有商品选中的数量
    	$(".layout em").html(num2);
    	if(num == num2) {
    		//如果商品的数量 = 选中的数量
    		$("#AllCheck").prop('checked', true); //else全选按钮被选中
    	} else {
    		$("#AllCheck").prop('checked', false); //else全选按钮不被选中
    	}
    	TotalPrice();

    })

    //编辑页面修改样式
    var flag = true;
    $(".tt").click(function() {
    	if(flag) {
    		$(this).html("完成");
    		$(this).parents(".shop").find(".d2").css("display", "block");
    		$(this).parents(".shop").find(".d1").css("display", "none");
    		flag = false;
    	} else {
    		$(this).html("编辑");
    		$(this).parents(".shop").find(".d2").css("display", "none");
    		$(this).parents(".shop").find(".d1").css("display", "block");
    		flag = true;
    	}
    })

    //删除按钮
    $('.right').on('click', function() {
    	
    	var num = $(this).parents(".section").find(".goods-check:checked").length;
    	$(".layout em").html(num-1);
    	if(num==0){
    		$(".layout em").html(0);
    	}
    	var num = $(this).parents(".shop").find(".shop2").length;
    	if(num - 1 == 0) {
    		$(this).parents(".shop").remove();
    	}
    	$(this).parents(".shop2").remove();
    	var m = $(".shop2").length;
    	if(m == 0) {
    		window.location.href = "empty.html"
    	}
    	TotalPrice();
    	shopNum();
    	

    })

    //数量减
    $(".jian").click(function() {
    	var t = $(this).parent().find("span").text();
    	var num = t - 1;
    	$(this).parent().find("span").text(num);
    	if(num <= 0) {
    		$(this).parent().find("span").text(1);
    		
    		return false;
    	}
    	$(this).parents("dl").find(".d1 .nu").text(num);
    	TotalPrice();

    })

    //数量加
    $(".jia").click(function() {
    	var t = $(this).parent().find("span").text();
    	var num = parseInt(t) + 1;
    	$(this).parent().find("span").text(num);

    	$(this).parents("dl").find(".d1 .nu").text(num);
    	TotalPrice();

    })

    //计算
    function TotalPrice() {
    	var allprice = 0; //总价
    	$(".shop").each(function() { //循环每个店铺
    		var oprice = 0; //店铺总价
    		$(this).find(".goods-check").each(function() { //循环店铺里面的商品
    			if($(this).is(":checked")) { //如果该商品被选中
    				var num = parseInt($(this).parents(".shop2").find(".nu").text()); //得到商品的数量
    				//                  console.log(num);
    				var price = parseFloat($(this).parents(".shop2").find("h3 i").text()); //得到商品的单价
    				console.log(price);
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
    

//购物车头部数量
function shopNum(){
	 var shop_num= $(".shop2").length;
$("header .center span").text(shop_num);
}

shopNum();



$(".layout").click(function(){
    var num = $(this).find("em").text(); //当前选择的数量
	var allPrice = $("#price").text(); //总价

	//ajax
	$.ajax({
		type: "POST",
		url: "http://wx.9leding.com/text",
		dataType: "html",

		data: {
			"allPrice": price,
			"num": num
		},
		success: function(data) {
			console.log(data);
		}
	});
})
