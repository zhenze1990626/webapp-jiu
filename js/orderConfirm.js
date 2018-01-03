
    //计算每个店铺的数量  价格
    function TotalPrice() {
//  	var allprice = 0; //总价
    
    		var oprice = 0; //店铺总价
    	  
    		
    		$(".shop2").each(function() { //循环店铺里面的商品
    		
    				var num = parseInt($(this).find(".nu").text()); //得到商品的数量
    				
    				//                  console.log(num);
    				var price = parseFloat($(this).find("h3 i").text()); //得到商品的单价
    				
    				var total = price * num; //计算单个商品的总价
    				oprice += total; //计算该店铺的总价
    		   

    		});
    		var oneprice = parseFloat(oprice.toFixed(2)); //得到每个店铺的总价
    		
    		
    	    var freight = parseInt($(".freight p span b").text());//运费的价格
    	    var oneprices = oneprice + freight;//运费加上总价
    	    
    	    
//  		allprice += oneprice; //计算所有店铺的总价
           $("footer span b").text(oneprices);
    	};

//  	$("#price").text(allprice.toFixed(2)); //输出全部总价

    
    TotalPrice();
    

//确认免责协议

$("footer .ti").click(function(){
	if($(this).parents(".container").find(".disclaimer .check").prop("checked") == true){//确认免责协议，点击提交订单，发送ajax请求
					//ajax
var phone = $(".address p span").text();//手机号
var name = $(".address p b").text();//收货人名字
var address= $(".address h2 span").text();//收货地址
var mode = $(".payment p span b").text();//支付方式
var num = $(".nu").text();//商品数量
var price = $(".d1 h3 i").text();//商品单价
var freight = $(".freight p span b").text();//运费
var allPrice = $("footer span b").text();//合计价格


$.ajax({
type: "POST",
url: "http://wx.9leding.com/text",
dataType: "html",
data:{"phone":phone,"name":name,"address":address,"mode":mode,"price":price,"num":num,"freight":freight,"allPrice":allPrice},
   success: function(data){
    console.log(data);
   }
});
	}else{//否则无效
		
	}
	
	
})



//查看免责协议书
$(".disclaimer p b").click(function(){
	window.location.href="disclaimer.html";
})




