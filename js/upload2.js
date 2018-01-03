$(function () {
var _x_start,_y_start,_x_move,_y_move,_x_end,_y_end,left_start,top_start;
var _x2_start,_y2_start,_x2_move,_y2_move,_x2_end,_y2_end,left2_start,top2_start;
//$(document).on("touchstart",'.upload',function(event)
//{   
//	
//  if(event.originalEvent.targetTouches.length == 1) {
//      _x_start = event.originalEvent.touches[0].pageX;
//      _y_start = event.originalEvent.touches[0].pageY;
//      left_start = $(".upload").css("left");
//      top_start = $(".upload").css("top");
//  }
//  
////   //双指事件
////   else if(event.originalEvent.targetTouches.length == 2) {
////   	
////   }
//})
//
//
//$(document).on("touchmove",'.upload',function(event)
//{   
//	
//  if(event.originalEvent.targetTouches.length == 1) {
//      _x_move = event.originalEvent.touches[0].pageX;
//      _y_move = event.originalEvent.touches[0].pageY;
//      $(".upload").css("left", parseFloat(_x_move) - parseFloat(_x_start) + parseFloat(left_start) + "px");
//      $(".upload").css("top", parseFloat(_y_move) - parseFloat(_y_start) + parseFloat(top_start) + "px");
//  }
////   //双指事件
////  else if(event.originalEvent.targetTouches.length == 2) {
//// 
////   	
////   }
////  
//})
//
//$(document).on("touchend",'.upload',function(event)
//{
//  var _x_end=event.originalEvent.changedTouches[0].pageX;
//  var _y_end=event.originalEvent.changedTouches[0].pageY;
//
//
//})


$(document).on("touchstart",'.hehe',function(event)
{   
	
    if(event.originalEvent.targetTouches.length == 1) {
        _x_start = event.originalEvent.touches[0].pageX;
        _y_start = event.originalEvent.touches[0].pageY;
        left_start = $(".hehe").css("left");
        top_start = $(".hehe").css("top");
    }
    
//   //双指事件
//   else if(event.originalEvent.targetTouches.length == 2) {
//   	
//   }
})


$(document).on("touchmove",'.hehe',function(event)
{   
	
    if(event.originalEvent.targetTouches.length == 1) {
        _x_move = event.originalEvent.touches[0].pageX;
        _y_move = event.originalEvent.touches[0].pageY;
        $(".hehe").css("left", parseFloat(_x_move) - parseFloat(_x_start) + parseFloat(left_start) + "px");
        $(".hehe").css("top", parseFloat(_y_move) - parseFloat(_y_start) + parseFloat(top_start) + "px");
    }
//   //双指事件
//  else if(event.originalEvent.targetTouches.length == 2) {
// 
//   	
//   }
//  
})

$(document).on("touchend",'.hehe',function(event)
{
    var _x_end=event.originalEvent.changedTouches[0].pageX;
    var _y_end=event.originalEvent.changedTouches[0].pageY;


})


})

