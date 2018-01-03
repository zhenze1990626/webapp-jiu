$(function(){
	//点击换色
	$('.list2 ul li').on('click',function(){
		$(this).addClass('active').removeClass('border');
		$(this).siblings('li').removeClass('active').addClass('border');
	})
	
	//文字上传
	$('.add3').on('click',function(){
		var m= $(".text-font").val();
		if(m!=''){
			$('.hehe em').css({'font-size':'14px','font-family':'ZoomlaXingtiJ', 'font-weight':'500'});
			var m2='<div> '+ m +' </div>';
			$('.hehe em').append(m2);
			$(".hehe>img").remove();
			$('.add3').html("覆盖");
			$('.font1').click(function(){
					$('.hehe em').css({'font-family':'ZoomlaXingtiJ', 'font-weight':'500'});
			})
			
			$('.font2').click(function(){
					$('.hehe em').css({'font-family':'ZoomlaXingtiJ2', 'font-weight':'500'});
			})
			
			$('.font3').click(function(){
					$('.hehe em').css({'font-family':'zFont2', 'font-weight':'500'});
			})
			
			$('.font4').click(function(){
					$('.hehe em').css({'font-family':'zFont1', 'font-weight':'500'});
			})
			
			$('.font5').click(function(){
					$('.hehe em').css({'font-family':'ZoomlaXingtiJ3', 'font-weight':'500'});
			})
           if($('.hehe em div').length>1){
           	$('.hehe em div:first').remove();
           }
		}
		
		
	})
	
	
	
})
