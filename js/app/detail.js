$(function(){
	$(".gouwu").mouseenter(function(){
		$(this).addClass("meiyou");
		$(".kuai").css("display","block");
	})
	$(".gouwu").mouseleave(function(){
		$(this).removeClass("meiyou");
		$(".kuai").css("display","none");
	})
	$(".wode").mouseenter(function(){
		$(this).addClass("xiu");
		$(this).find(".red").css("color","red");
		$(".myxiux").css("display","block");
	})
	$(".wode").mouseleave(function(){   
		$(this).removeClass("xiu");
		$(this).find(".red").css("color","#000");
		$(".myxiux").css("display","none");
	})
//头部设置结束
	$(".geng").click(function(){
		if($(".geng img").prop("src")=="http://127.0.0.1:8020/zouxiu/img/down.gif"){
			//alert("ok");
			$(".daohang").css("display","block");
			$(".geng img").prop("src","img/up.gif");
		}else if($(".geng img").prop("src")=="http://127.0.0.1:8020/zouxiu/img/up.gif"){
			$(".daohang").css("display","none");
			$(".geng img").prop("src","img/down.gif");
		}
	})


//导航的隐藏部分结束
	
	$(".smallleft ul li").mouseenter(function(){
		var num=$(this).index();
		$(this).addClass("bor").siblings().removeClass("bor");
		$(".bigleft img").prop("src",'http://images.xiustatic.com/upload/goods20160505/74261771/742617710001/g'+(num+1)+'_400_400.jpg');
		$(".rigpro img").prop("src",'http://images.xiustatic.com/upload/goods20160505/74261771/742617710001/g'+(num+1)+'_400_400.jpg');
	})
//鼠标滑过小的上面显示大的；	
	$(".bigleft").mouseenter(function(){
		$(".move").css("display","block");
		$(".rigpro").css("display","block");
	})
	$(".bigleft").mouseleave(function(){
		$(".move").css("display","none");
		$(".rigpro").css("display","none");
	})
	$(".bigleft").mousemove(function(event){
		//console.log(event.offsetX);
	//在这里用pageX是因为在页面中会有滚动条，
//	console.log($(".bigleft").offset().left);
//	console.log($(".bigleft").position().left);
//	position()是相对于其具有定为的祖辈元素的偏移值，当是默认值得时候，Position()获取的值和offset()获取的值是相同的；position()无法用来赋值，只能取值；
		var x=event.pageX-$(".bigleft").offset().left-$(".move").width()/2;
		var y=event.pageY-$(".bigleft").offset().top-$(".move").height()/2;
		if(x<0){
			x=0;
		}
		if(x>$(".bigleft").width()-$(".move").width()){
			x=$(".bigleft").width()-$(".move").width();
		}
		if(y<0){
			y=0;
		}
		if(y>$(".bigleft").height()-$(".move").height()){
			y=$(".bigleft").height()-$(".move").height();
		}
		$(".move").css("left",x);
		$(".move").css("top",y);
		$(".rigpro img").css("left",-2*x);
		$(".rigpro img").css("top",-2*y);
	})
//放大镜end
	$(".xuankaul1 li").click(function(){
//		alert("ok");
		$(this).css("background","#fff");
		$(this).siblings().css("background","#F7F7F7");
	})
	$(".xuankaul1 li:eq(0)").click(function(){
		$(".co11").css("display","block");
		$(".co22 ul").css("display","none");
		$(".co33").css("display","none");
	})
	$(".xuankaul1 li:eq(1)").click(function(){
		$(".co11").css("display","none");
		$(".co22 ul").css("display","block");
		$(".co33").css("display","none");
	})
	$(".xuankaul1 li:eq(2)").click(function(){
		$(".co11").css("display","none");
		$(".co22 ul").css("display","none");
		$(".co33").css("display","block");
	})
//选项卡结束
	var op=parseInt($(".goodsinfo input").val());
	$(".zuo").click(function(){
		op-=1;
		if($(".goodsinfo input").val()>1){
			$(this).css("color","black")
			$(".goodsinfo input").val(op);
		}else if($(".goodsinfo input").val()<=1){
			$(this).css("color","#ebebeb");
		}
	})
	$(".you").click(function(){
		if($(".goodsinfo input").val()<10){
			op=parseInt($(".goodsinfo input").val());
			op+=1;
			$(".goodsinfo input").val(op);
		}else if($(".goodsinfo input").val()>=10){
				$(this).css("color","#ebebeb");
		}
	})
//数量的加减结算完毕
	$(".bagsxiang h3").click(function(){
		$(".bagsxiang").css("display","none");
	})
	$(".goodsinfo .a2").click(function(){
		$(".bagsxiang").css("display","block");
	})

//尺码隐藏部分结束
//alert($(".rigpro img").attr("src"))
	$(".jia1").click(function(){
		//alert($(".rightpro h4").text())
		var tmpJSON={
			uimg:$(".rigpro img").attr("src"),
			ubian:$(".rightpro h4").text(),
			utitle:$(".rightpro h3").text(),
			uprice:$(".xianshi b").text(),
			ucolor:$(".goodsinfo .a1").text(),
			usize:$(".goodsinfo .ac1").text()	
		};
		//将json对象转化成字符串；存入到cookie中
			var tmpStr=JSON.stringify(tmpJSON);
			$.cookie($(".rightpro h4").text(),tmpStr,{expires:7,path:'/'})
	})
		$(".jia2").click(function(){
			var tmpJSON=JSON.parse($.cookie($(".rightpro h4").text()));
			console.log(tmpJSON.ubian);
		})
				
})

