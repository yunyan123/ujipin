require(["config"], function(){
	require(["jquery","load" ],function($){
		
		//轮播效果引入bootstrap;
		require(["bootstrap"],function(){
			
		});
	
		//首页秒杀倒计时
		function seckill_tick(){
			var time=new Date();
//			console.log(time);
//			if(!time)return false;
			var t=setInterval(function(){
                time--;
                h=parseInt(time/1000/60/60%24)<10 ? "0"+parseInt(time/1000/60/60%24) : parseInt(time/1000/60/60);
            var sT = time%3600;
            	m=parseInt(sT/60)<10 ? "0"+parseInt(sT/60) :  parseInt(sT/60);
                sT = sT%60;
            var s=parseInt(sT)<10 ? "0"+parseInt(sT) : parseInt(sT);
                
				$("#seckill_time>div>p>span").eq(0).html(h);
				$("#seckill_time>div>p>span").eq(1).html(m);
				$("#seckill_time>div>p>span").eq(2).html(s);
                if(time<=0){
                    clearInterval(t);
//		            location.reload();
                }
            },1000);

		}
		seckill_tick();
	});
	
	
	
	//动态加载商品品牌到秒杀页面
	require(["jquery", "template", "load"], function($, template){
		$.getJSON("/mock/list.json", function(data){			
			var html = template("prod_detail",{list:data});
			$(html).appendTo("#seckill_time");
		});

	});
	
	
	//动态加载商品品牌到最热商品页面
	require(["jquery", "template", "load"], function($, template){
		$.getJSON("/mock/list_hot.json", function(data){			
			console.log(template);
			console.log(data);
			var _html = template("prod_hot_detail",{list_hot:data});
			console.log(_html);
			$(_html).appendTo(".goods_list");
		});
	});
	
		
})







