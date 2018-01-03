/**
 * Created by Administrator on 2017/7/21.
 */
//详情页链接
$(function () {
    //跳转定制页
    $(".third cite").click(function(event){
        window.location.href='upload-img.html';
        event.stopPropagation();

    })
    //跳转详情页
    $(".cicle").click(function(){
        window.location.href='detail.html';
    })


})
