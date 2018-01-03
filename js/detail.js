/**
 * Created by Administrator on 2017/7/24.
 */
$(function(){
    $('.box').on('touchstart',function () {
        window.location.href='customization.html';
    })
    //点击切换
    $('.cicle3 div').on('click',function () {
        $(this).css({'background':'#f69a50','color':'#ffffff'})
        $(this).siblings('div').css({'background':'#dfdfdf','color':'#8e8e8e'})
        $('.layout').find('img').eq($(this).index()).css('display','block').siblings('img').css('display','none');
    })

    //选项切换
    var flag=true;
    $('.text3 em').on('click',function () {
        if(flag) {
            $(this).closest('.zong').find('.choose2').css('display', 'block');
            $(this).closest('.text3').find('img').attr('src', 'img/cut.png');
            flag=false;
        }
        else{
            $(this).closest('.zong').find('.choose2').css('display', 'none');
            $(this).closest('.text3').find('img').attr('src', 'img/add.png');
            flag=true;
        }
    })


    //按钮变换
    $('.layout3 button').on('click',function () {
        $(this).css({"background":"#f65050","color":"#ffffff",'border':'none'}).addClass('box3').siblings('button').css({"background":"#ffffff","color":"#122940",'border':'1px solid #838383'}).removeClass('box3');
        var m=$(this).html();
        $(this).closest('.zong').find('.text3 span').html(m);
    })
    
    //加减数量
    $('#add').on("click",function () {
        $('.text4').val(parseInt($('.text4').val())+4);
        price();
    })

    $('#cut').on("click",function () {

        if($('.text4').val()>=8){
            $('.text4').val(parseInt($('.text4').val())-4);
            price();
        }
        else{
            $('.text4').val(4);
            price();
        }
    })

    //合计金额
    function price() {
        var m2=parseInt(parseInt($('.jifen span').html())*parseInt($('.text4').val()));
        //console.log(m2);
        $('.price span').html(m2);
    }
     price();

    //跳转到图片上传
    $('#img').on('click',function () {
        window.location.href="upload-img.html";

    })
    //跳转到文字上传
    $('#text').on('click',function () {
        window.location.href="upload-text.html";

    })
	
	//点击购物车
	$('.left').on('click',function(){
	         $.ajax({
             type: "POST",
             url: "http://wx.9leding.com/text",
             dataType: "html",
			 data:{
				 "num1":$('#text1 span').html(),
				 "num2":$('#text2 span').html(),
				 "num3":$('#text3 span').html(),
				 "num4":$('#text4 span').html(),
				 "num5":$('#text5 span').html(),
				 "num6":$('.text4').val(),
				 "num7":$('.all b span').html()
				 
				 },
             success: function(data){
                        console.log(data);
                      },
		     error:function(){
				 console.log('失败');
				 }
         });
		
	})
	
	//点击立即购买
	$('.right').on('click',function(){
	         $.ajax({
             type: "POST",
             url: "http://wx.9leding.com/text",
             dataType: "html",
			 data:{
				 "num1":$('#text1 span').html(),
				 "num2":$('#text2 span').html(),
				 "num3":$('#text3 span').html(),
				 "num4":$('#text4 span').html(),
				 "num5":$('#text5 span').html(),
				 "num6":$('.text4').val(),
				 "num7":$('.all b span').html()
				 
				 },
             success: function(data){
                        console.log('成功');
                      },
		     error:function(){
				 console.log('失败');
				 }
         });
		
	})
	
	
	
	
})