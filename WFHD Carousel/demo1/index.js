$(function(){
	//定义一个变量，用来模拟那个不断在改变点的序号
    var dianKey=0;
    //定义一个变量，用来模拟那个不断在改变图片的序号
    var imgKey=0;
    var timer;

    //实现无缝的关键就是：请临时工
    var firstLi=$('.imgList li:first').clone(true);
    $('.imgList').append(firstLi);

    var nextFn=function(){

        //需要点的不断改变的序号：0 1 2 3
        dianKey++;
        if(dianKey>3){
            dianKey=0;
        }

        //让下一张的小点具备current...
        $('.btnList li').eq(dianKey).addClass('current').siblings('li').removeClass('current');

        //需要图片不断改变的序号：0 1 2 3 4
        imgKey++;
        if(imgKey>4){
            //当你在临时工身上时，用户以为他看到的是第一张，但实际上它是临时工；
            //用户希望看到的下一张是第1张
            imgKey=1;
            //这里一瞬间需要让盒子回到0的位置
            //因为我需要实现每次都走400PX，所以一瞬间回到0，从0到-400过渡
            $('.imgList').css('left', 0);

        }


        //移动公式：imgKey*-400
        var s=imgKey*-400;
        $('.imgList').stop().animate({'left':s}, 500);

    }

    var prevFn=function(){

        dianKey--;
        if(dianKey<0){
            dianKey=3;
        }
        //让上一张的小点具备current...
        $('.btnList li').eq(dianKey).addClass('current').siblings('li').removeClass('current');


        imgKey--;
        if(imgKey<0){
            //用户希望看到的上一张是第3张（临时工前面的那一张）
            imgKey=3;
            //为了实现无缝，也就是每次都走400PX
            //这里一瞬间需要让盒子回到-1600PX的位置
            //从-1600PX向-1200PX进行过渡 
            $('.imgList').css('left', -1600);
        }

        //移动公式：imgKey*-400
        var s=imgKey*-400;
        $('.imgList').stop().animate({'left':s}, 500);

    }

    $('.right').click(nextFn);
    $('.left').click(prevFn);

    //给单击小点绑定事件
    $('.btnList li').click(function(event) {

        //先获取到序号
        var i=$(this).index();
        var s=i*-400;
        //让小点走走
        $('.btnList li').eq(i).addClass('current').siblings('li').removeClass('current');
        //让图片走走
        $('.imgList').stop().animate({'left':s}, 500);
        //为了让当前这个序号能够影响到上一张和下一张，
        //还有一个很重要的步骤：序号同步（两个全局变量都需要同步）
        imgKey=i;
        dianKey=i;

    });

    //使用定时器实现自动走
    timer=setInterval(nextFn, 1500);

    //鼠标悬停时，停止定时器
    $('.con').hover(function() {
        clearInterval(timer);
    }, function() {
        clearInterval(timer);
        timer=setInterval(nextFn, 1500);
    });
})