$(function(){
	$("input").val("");
	$(".weekauto input").prop("checked",false);
//通过cookie取数据
	$(".deng .but1").click(function(){
		var tmpJSON={
			uname:$(".username input").val(),
			uyan:$(".tixing input").val(),
			uduan:$(".message input").val(),
			upas:123456
		};
	//把json对象格式转化为字符串
		var tmpStr=JSON.stringify(tmpJSON);
		$.cookie($(".username input").val(),tmpStr,{expires:7,path:'/'})
	var tmpJSON=JSON.parse($.cookie($(".way .username input").val()));
		console.log(tmpJSON);
		if($(".username input").val()==tmpJSON.uname){
			alert("注册成功,请直接登录");
		}
	})
//用户名、手机号的验证
	$(".way .username input").focus(function(){
		$(this).next().css("top",-10);
	})
	$(".way .username input").blur(function(){
		$(this).next().css("top",-10);
		var reg=/^1[35678][0-9]{9}$/;
		if($(".username input").val()=='')	{		
			$(".erro").css("display","block");
			$(".tixing").css("display","none");
		}else if(reg.test($(".username input").val())){
			$(this).next().remove();
			$(".erro").css("display","none");
			$(".tixing").css("display","block");
		}else{
			$(".erro").css("display","block");
			$(".erro i").text("手机号码格式错误！");
			$(".tixing").css("display","none");
		}
		var tmpJSON=JSON.parse($.cookie($(".way .username input").val()));
		//console.log(tmpJSON);
//这个是判断当前手机号是否被注册过
		if($(".username input").val()==tmpJSON.uname){
			alert("账号已注册,请登录");
		}
	})
//验证码的验证
	function getRandom(_min,_max){
		return parseInt(Math.random() * (_max - _min) + _min);
	}
	$(".huan").click(function(){
		var num=getRandom(1,100);
		$(".ma").text(num);
	})
	var num=getRandom(1,100);
	$(".ma").text(num);
	$(".tixing input").focus(function(){
//在获取焦点事件里面写一个keyup事件，这样就可以在键盘弹起的时候，对输入框的内容进行验证
		$(this).next().css("top",20);
		$(this).keyup(function(){
		if($(this).val()==$(".ma").text()){
			//alert("ok")
			$(".dui").css("opacity",1).next().css("opacity",0);
			$(".message a").text("30s");
			
		}else{
			$(".dui").css("opacity",0).next().css("opacity",1);
		}	
		})
	})

//短信验证码的验证
	$(".message input").focus(function(){
		$(this).next().css("top",-10);
	})
	$(".message input").blur(function(){
		$(this).next().css("top",-10);
		if($(this).val()==''){
			$(".erro1").css("display","block");
		}else{
			$(".erro1").css("display","none");
		}
		
	})
//安全提醒选择
	$(".weekauto input").hover(enter,leave);
	function enter(){
		$(this).next().css("display","block");
	}
	function leave(){
		$(this).next().css("display","none");
	}
//注册页面
	$(".active").click(function(){
		$(".way").css("display","block").next().css("display","none");
		$(this).css("color","#464646");
		$(".active1 a").css("color","#ccc")
		$(this).css("border-bottom","2px solid #464646");
		$(this).find("a").css("color","#464646");
		$(".active1").css("border-bottom",0)
	})
	$(".active1").click(function(){
		$(".way1").css("display","block");
		$(".way").css("display","none");
		$(this).css("border-bottom","2px solid #464646")
		$(this).find("a").css("color","#464646");
		$(".active").find("a").css("color","#ccc");
		$(".active").css("border-bottom",0)
	})
	$(".weekauto b").click(function(){
		$(".way").css("display","block").next().css("display","none");
		$(".active").css("color","#464646");
		$(".active1 a").css("color","#ccc")
		$(".active").css("border-bottom","2px solid #464646");
		$(".active").find("a").css("color","#464646");
		$(".active1").css("border-bottom",0)
	})
	$(".way1 .username input").focus(function(){
		$(this).next().css("top",-10);
	})
	$(".way1 .username input").blur(function(){
		$(this).next().css("top",-10);
	})
	
	$(".but2").click(function(){
		var tmpJSON=JSON.parse($.cookie($(".way1 .username input").val()));
		console.log(tmpJSON);
		if($(".way1 .username input").val()==tmpJSON.uname&&$(".way1 .message input").val()==tmpJSON.upas){
			window.open("index.html");
			$(".lhead1 a").text("亲，你好")
		}
	})

})
