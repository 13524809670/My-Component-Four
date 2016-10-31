$(function(){
	var num=0;
	var timer;
	var nextFn=function(){
	    //没加之前代表上一张，上一张淡出
	    $('.imgList li').eq(num).stop().fadeOut(1500);
	    num++;
	    if(num>3){
	        num=0;
	    }
	    //更改完以后代表下一张，下一张淡入
	    $('.imgList li').eq(num).stop().fadeIn(1500);
	    $('.btnList li').eq(num).addClass('current').siblings('li').removeClass('current');
	}
	var prevFn=function(){
	    //没加之前代表上一张，上一张淡出
	    $('.imgList li').eq(num).stop().fadeOut(1500);
	    num--;
	    if(num<0){
	        num=3
	    }
	    //更改完以后代表下一张，下一张淡入
	    $('.imgList li').eq(num).stop().fadeIn(1500);
	    $('.btnList li').eq(num).addClass('current').siblings('li').removeClass('current');
	}   
	//左右按钮点击
	$('.rightBtn').click(nextFn);
	$('.leftBtn').click(prevFn);   
	//小点点击
	$('.btnList li').click(function(event) {           
	    var i=$(this).index();
	    //现在这个全局变量num就代表上一张
	    //没加之前代表上一张，上一张淡出
	    $('.imgList li').eq(num).stop().fadeOut(1500);
	    //再让序号和num进行同步
	    num=i;
	    //重新赋值以后，num就代表下一张
	    //更改完以后代表下一张，下一张淡入
	    $('.imgList li').eq(num).stop().fadeIn(1500);
	    $('.btnList li').eq(num).addClass('current').siblings('li').removeClass('current');
	}); 
	//自动走
	timer=setInterval(nextFn, 2000);
	//鼠标悬停时...
	$('.box').hover(function() {
	    clearInterval(timer);
	}, function() {
	    clearInterval(timer);
	    timer=setInterval(nextFn, 2000);
	});
})