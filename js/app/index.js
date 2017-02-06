$(function(){
	$(".shortcut a img").mouseenter(function(){
		$(this).stop().animate({
			left:-25
		})
	})
	$(".shortcut a img").mouseout(function(){
		$(this).stop().animate({
			left:0
		})
	})
//快捷方式结束
	$(".jianhuo ul li").hover(enter,out);
	function enter(){
		$(this).stop().animate({
			opacity:0.7
		})
	}
	function out(){
		$(this).stop().animate({
			opacity:1
		})
	}
//尖货部分结束
	$(".tuijian ul li").mouseenter(function(){
		$(this).find(".tuijianimg").stop().animate({
			width:620,
			height:320
		})
	})
	$(".tuijian ul li").mouseout(function(){
		$(this).find(".tuijianimg").stop().animate({
			width:600,
			height:300
		})
	})
//推荐部分结束	
	$(".jingmai ul li").mouseenter(function(){
		$(this).find(".tuijianimg").stop().animate({
			width:420,
			height:320
			
		})
	})
	$(".jingmai ul li").mouseout(function(){
		$(this).find(".tuijianimg").stop().animate({
			width:400,
			height:300
		})
	})
//精选卖场结束
	$(".richcar").hover(car1,car2);
	function car1(){
		$(this).stop().animate({
			opacity:0.7
		})
	}
	function car2(){
		$(this).stop().animate({
			opacity:1
		})
	}
//豪车部分结束

//banner图的轮播设置
		var timer=null;
		timer=setInterval(show,6000);
		var index=1;
		function show(){
			if(index==3){
				index=0;
			}
			$(".banner img").eq(index).fadeIn().siblings().fadeOut();
			index++;
		}
			
})
	

