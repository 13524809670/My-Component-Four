$(function(){

    var num=0;
    var timer;
    var sportFn=function(){
        $('.btnList li').eq(num).addClass('current').siblings('li').removeClass('current');
        $('.fadeCover').stop().fadeIn(200,function(){
            $(this).stop().fadeOut(300);
            $('.imgList li').eq(num).show().siblings('li').hide();
        });
    }
    var nextFn=function(){
        num++;
        if(num>3){
            num=0;
        }
        sportFn();
    }
    var prevFn=function(){  
        num--;
        if(num<0){
            num=3
        }
        sportFn();
    }
    //左右按钮点击
    $('.rightBtn').click(nextFn);
    $('.leftBtn').click(prevFn);
    //小点点击
    $('.btnList li').click(function(event) {
        var i=$(this).index();
        num=i;
        sportFn();
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