!function(){$(document).ready(function(){$(".stars li").click(function(){for(var a=$(this).index(),b=0;a>=b;b++)$(".stars li").eq(b).css("background-position","63px 0px");for(var b=0;6>b;b++)b>a&&$(".stars li").eq(b).css("background-position","0px 0px")})})}();