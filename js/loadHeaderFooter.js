//define(["jquery","cookie"],function($){ //定义模块加载头部尾部
//	//加载header
//	$.ajax({
//		type:'get',
//		url:"/html/include/header.html",
//		success:function(data){//请求成功返回的字符串data
//			var _username=$.cookie("loginUser");
//			if(_username){//存在登录成功的用户
//				$(data).filter(".head").html(`欢迎你:$_username`).end()
//						.append(".header");
//			}else{
//				console.log(data);
//				$(data).appendTo(".header");
//			}
//		}
//	});
//	
//	
//	$.ajax({
//		type:'get',
//		url:"/html/include/footer.html",
//		success:function(data){
//			console.log(data);
//			$(data).appendTo(".footer");
//		}
//	});	
//});
//


define(["jquery", "cookie"], function($){
	$.ajax({
		type : 'get',
		url : "/html/include/header.html",
		success : function(data){
			var _username = $.cookie("loginUser");
			if (_username) { // 存在登录成功的用户
				$(data).filter(".head")
					   .html(`欢迎你：${_username}`).end()
					   .appendTo(".header");
			} else {
				$(data).appendTo(".header");
			}
		}
	});
});


















