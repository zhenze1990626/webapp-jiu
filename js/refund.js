/**
 * Created by Administrator on 2017/7/15.
 */
$(function(){
    //弹框  退款
        $('.black').css('display','block');
        $('.alert').css('display','block');
        $ (window).scroll (function ()
    {
        $ (this).scrollTop (0)
    });
   //确定
   $('.title10').on('click',function(){
       $('.black').css('display','none');
       $('.alert').css('display','none');
       $ (window).unbind ('scroll');
   })

    //删除
    $('.delete2').on('click',function(){
        $('.black').css('display','none');
        $('.alert').css('display','none');
          $ (window).unbind ('scroll');
    })
    
    //显示隐藏
    var flag=true;
    $('.type').on('click',function(){
    	 if(flag) {
                $(this).closest('.all').find('.detail3').show(200).css("display", "block");
                flag=false;
                $(this).find('.list').attr("src","img/list2.png");
            }
            else{
                $(this).closest('.all').find('.detail3').hide(200).css("display", "none");
                flag=true;
                $(this).find('.list').attr("src","img/list.png");
            }
    })
    
    //选中
    //退款类型
    $('.check').on('click',function(){
    	var m=$(this).siblings('span').html();
    	$(this).closest('.all').find('.type2').html(m);
    	
    })
    
    //退款金额
    $('#check-price').on('click',function(){
    	var jkl=$(this).closest('.title').find('span').html();
    	$(this).closest('.all').find('.type2').html(jkl);
    })
    
    $('.queren').on('click',function(){
    	var jkl=parseInt($(this).closest('.all').find('.shuru2').val());
    	var jkl2=parseInt($(this).closest('.all').find('.title').find('b').html());
    	if($('#check-price2').prop('checked')==true && (jkl<=jkl2)){
    		var jkl=$(this).closest('.all').find('.shuru2').val();
    		$(this).closest('.all').find('.type2').html(jkl);
    	}
    })
    
     $('.quxiao').on('click',function(){
     	if($('#check-price2').prop('checked')==true){
    	$(this).closest('.all').find('.shuru2').val('');
    	}
    })
    
 })
