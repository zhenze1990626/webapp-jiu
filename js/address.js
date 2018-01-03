/**
 * Created by Administrator on 2017/7/12.
 */
$(function () {

    //姓名验证
    $('.name').blur(function(){
        checkmarget1();
    });

    function checkmarget1(){
        var mk=/^([\u4e00-\u9fa5]){2,6}$/;
        var res = false;
        if(!mk.test($(".name").val())){
            $('.xianshi1').show();
            $('.xianshi1').html('请填写正确的中文姓名');
        }
        else{
            $('.xianshi1').hide();
            var res = true;

        }
        return res;
    }

    //手机号验证
    $('.phone').blur(function(){
        checkphone();
    });
    function checkphone(){
        var mk=/^1[358][0-9]{9}$/;
        var res=false;
        if(!mk.test($('.phone').val())){
            $('.xianshi2').show();
            $('.xianshi2').html("您的手机号码输入有误，请重新输入！");
            res=false;
        }
        else{
            var res=true;
            $('.xianshi2').hide();
        }
        return res;
    }


    //收货地址验证
    $('.address').blur(function(){
        checkmarget2();
    });

    function checkmarget2(){
        var mk=/^([\u4e00-\u9fa5_a-zA-Z0-9]){6,30}$/;

        var res = false;
        if(!mk.test($(".address").val())){
            $('.xianshi3').show();
            $('.xianshi3').html('请填写正确的收货地址！');
        }
        else{
            $('.xianshi3').hide();
            var res = true;
        }
        return res;
    }

    ////通过验证
    $(".preservation2").on('click',function(){
        var obj1=checkmarget1();
        var obj2=checkmarget2();
        var obj3=checkphone();
        if(obj1 && obj2 && obj3){
            localStorage.setItem('name',$('.name').val());
            localStorage.setItem('phone',$('.phone').val());
            localStorage.setItem('address',$('.address').val());
//          window.location.href="setup.html";

        }
        else{
          $('.alert').css('display',"block");
          $('.black3').css('display','block');
        }

    })
    //确定
    $('.title3').on('click',function () {
        $('.alert').css('display',"none");
        $('.black3').css('display','none');
    })

})