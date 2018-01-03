
var flag=true;

$(".month p span i").click(function(){
	if(flag){
	$(this).parents(".month").find("h2").css("display","block");
	$(this).text("-");

	flag = false;
	
	}else{
		$(this).parents(".month").find("h2").css("display","none");
	$(this).text("+");
	flag = true;
	}
	
}

)

    $('[name="nice-select"]').click(function(e){
        $('[name="nice-select"]').find('ul').hide();
        $(this).find('ul').show();
        e.stopPropagation();
    });

    $('[name="nice-select"] li').hover(function(e){
        $(this).toggleClass('on');
        e.stopPropagation();
    });

    $('[name="nice-select"] li').click(function(e){
        var val = $(this).text();
        //判断
        var myDate=new Date();
        var year=myDate.getFullYear();
        //console.log(year);
        var value=$(this).html();
        //console.log(value);
        if(value<=year){
            $(this).parents('[name="nice-select"]').find('input').val(val);
            $('[name="nice-select"] ul').hide();
            e.stopPropagation();
        }
        else{
            alert('您选择的年份还没到呢客官！！')
        }
    });


    $(document).click(function(){
        $('[name="nice-select"] ul').hide();
    });
