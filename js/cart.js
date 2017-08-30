require(["config"], function(){
	require(["jquery","template","load"],function($,template){
		
		//动态加载商品品牌到购物车最热商品页面
		$.getJSON("/mock/cart_hot_list.json", function(data){			
			var _html = template("goods_introduce",{cart_hot_list:data});
			$(_html).appendTo(".goods_list");
		});
		
		
		
		
		
		
	});	
	
	
	
	
})