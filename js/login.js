require(["config"], function(){
	require(["jquery","load" ],function($){
//		验证手机号码
		$("#phone_num").blur(function(){
			var rag=/^1[3|4|5|7|8][0-9]\d{4,8}$/.test($("#phone_num").val());
			if(!rag){
				$(".phone_num span").show();
			}
		})
		
//		验证密码
		$("#password").blur(function(){
			var rag=/^1[3|4|5|7|8][0-9]\d{4,8}$/.test($("#phone_num").val());
			if(!rag){
				$(".password span").show();
			}
		})
		

	
	});		
})