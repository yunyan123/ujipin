require(["config"], function(){
	require(["jquery","load" ],function($){
	//	手机号码验证
	$("#phone_num").blur(function(){
		var rag=/^1[3|4|5|7|8][0-9]\d{4,8}$/.test($("#phone_num").val());
		if(rag){
			$(".phone span").show();
		}else{
			alert("您输入的格式不正确");
		}
	});

	//生成随机数字验证随机码
	var num=parseInt(10000*Math.random());
		$(".image_verify_code b").html(num);
	$("#image_verify_code").blur(function(){

		if(num==$("#image_verify_code").val()){
			$(".image_verify_code span").show();
		}else{
			alert("您输入的随机码不正确")
		}
		
	})
	


	//点击快捷登录跳转到登录页面
	$(".log_submit").click(function(){
		location.href="../html/login.html";
	})









	});		
})





