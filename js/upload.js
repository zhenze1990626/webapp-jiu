/**
 * Created by Administrator on 2017/7/25.
 */
$(function(){

    //图片上传 显示缩略图
    var res=true;
    $("#upload").change(function(){
        var mine = $('#upload').val();
        if(mine != ''){
            mine = mine.toLowerCase().substring(mine.lastIndexOf('.'));
            if(mine != '.jpg' && mine != '.png'){
                alert('病历必须是.jpg或者.png格式的');
            }else{
                var src = '';
                if(navigator.userAgent.indexOf('MSIE') >= 0){       //IE 单张上传
                    src = $("#upload").val();
                    var dl = '<img  src="' + src + '" class="upload"/ >';
                    
                    $('.hehe').append(dl);
                }else{												//非IE 多张上传
                    var f_arr = document.getElementById('upload').files;
                    var f = '';
                    var dl_arr = '';
                    var dl = '';
                    for(var i = 0; i < f_arr.length; i++){
                        f = f_arr[i];
                        src = window.URL.createObjectURL(f);
                        dl = '<img src="' + src + '" class="upload"/>';
                    }

                    //当上传第二张图片的时候，取消第一张
                    $('.hehe').append(dl);
                      $('.hehe em').html('');
                    var len= $(".hehe>img").length;
                    if(len>1){
                        $(".hehe>img:first").remove();
                      
                    }

                }
                if(res){

                    res=false;
                }
            }
        }
    });

    //删除
    $('.delete').on('click',function () {
        $(".hehe>img").remove();
    });
    //弹幕
    $('.help-text').on('click',function(){
    	$('.black').css('display','block');
    	$('.alert').css('display','block');
    	
    })

    //确定关闭
    $('.confirm').on('click',function () {
        $('.black').css('display','none');
        $('.alert').css('display','none');
    })


   $(function () {
            var $targetObj = $('#targetObj');
        
            //初始化设置
            cat.touchjs.init($targetObj, function (left, top, scale, rotate) {
                $('#left').text(left);
                $('#top').text(top);
                $('#scale').text(scale);
                $('#rotate').text(rotate);
                $targetObj.css({
                    left: left,
                    top: top,
                    'transform': 'scale(' + scale + ') rotate(' + rotate + 'deg)',
                    '-webkit-transform': 'scale(' + scale + ') rotate(' + rotate + 'deg)'
                });
            });
        
           //初始化拖动手势（不需要就注释掉）
            cat.touchjs.drag($targetObj, function (left, top) {
                $('#left').text(left);
                $('#top').text(top);
            });
            //初始化缩放手势（不需要就注释掉）
            cat.touchjs.scale($targetObj, function (scale) {
                $('#scale').text(scale);
            });
            //初始化旋转手势（不需要就注释掉）
            cat.touchjs.rotate($targetObj, function (rotate) {
                $('#rotate').text(rotate);
            });
        });





})