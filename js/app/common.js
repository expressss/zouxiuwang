
//头部左侧
$(function(){
//搜索框的设置，使用getJSON来得到数据
	$(".tex").focus(function(){
		$(this).val("");
	})

	$(".tex").keyup(function(){
		$(".texkuang").css("display","block");
		var url="http://search.mi.com/search/expand?keyword="+$(this).val()+"&jsonpcallback=?";
		$.getJSON(url,function(res){
			//console.log(res);
			var $ul=$("<ul></ul>");
			$(".texkuang").append($ul);
			for(var i in res){
				$ul.append($("<li>"+res[i].Key+"</li>")) ;
			}
			$(".texkuang ul li").click(function(){
					$(".tex").val($(this).text());
					$(".texkuang").css("display","none");
					
			})
		});
		if($(".tex").val()==""){
			$(".texkuang").css("display","none");
			$(".texkuang").html("");
		}
	})
	
	
	
	$(".lhead2").hover(mouseen,mouseou);
	function mouseen(){
		$(".lhead2").addClass("adlhead2");
		$(".lhead2 a").css("color","red");
		$(".lhead22").css("display","block");
	}
	function mouseou(){
		$(".lhead22").css("display","none");
		$(".lhead2").css("background","");
		$(".lhead2 a").css("color","#ccc");
		$(".lhead2").removeClass("adlhead2");
	}
	
	$(".lhead3").hover(mouseenter,mouseout);
	function mouseenter(){
		$(".lhead3").addClass("lhead33");
		$(".lhead3 a").css("color","red");
		$(".myxiu").css("display","block");
		$(".myxiu a").css("color","#ccc");
	}
	function mouseout(){
		$(".lhead3").removeClass("lhead33");
		$(".lhead3 a").css("color","#ccc");
		$(".myxiu").css("display","none");
	}
	$(".myxiu a").mouseover(function(){
		$(this).css("color","red");
		$(this).siblings().css("color","#ccc");
	})
/*头部结束*/
	$(".bag").mouseenter(function(){
		$(this).css({
			"background":"#fff",
			"border-left":"1px solid #ccc",
			"border-right":"1px solid #ccc",
			"border-bottom":"2px solid #fff"
		});
		$(this).find(".bags").css("display","block");
	})
	$(".bag").mouseleave(function(){
		$(this).find(".bags").css("display","none");
		$(this).css({
			"background":"",
			"border-left":"none",
			"border-right":"none",
			"border-bottom":"none"
		});
		
	})
/*nav部分 end*/
//吸顶效果
//吸顶效果第一个是absoulute的吸顶，是相对于具有定为的父元素进行的。这个会有跳动的现象。
	/*$(window).scroll(function(){
	//第一个吸顶的东西
		if($(window).scrollTop()>$(".lefthead").height()){
				//把jq转换成js对象进行设置
			$(".mheadcon")[0].style.top=$(window).scrollTop()+"px";
		}else{
			$(".mheadcon")[0].style.top=$(".lefthead").height()+11+"px";
		}
	//第二个吸顶的东西
		if($(window).scrollTop()>$(".header").height()){
				//把jq转换成js对象进行设置
				
			$(".navcon")[0].style.top=$(window).scrollTop()+$(".mhead").height()+"px";
		}else{
			$(".navcon")[0].style.top=$(".header").height()+12+"px";
		}
	})*/
//第二个吸顶的用fixed做的，它的位置是固定的，不会出现跳动的现象。
	$(window).scroll(function(){
		if($(window).scrollTop()>$(".lefthead").height()){
			$(".mheadcon")[0].style.top=0+"px";
		}else{
			$(".mheadcon")[0].style.top=$(".lefthead").height()+11+"px";
		}
		if($(window).scrollTop()>$(".header").height()){
			$(".navcon")[0].style.top=$(".mhead").height()+"px";
		}else{
			$(".navcon")[0].style.top=$(".header").height()+12+"px";
		}
	})
})
