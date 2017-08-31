require(["config"], function(){
	require(["jquery","load" ],function($){

		
		//放大镜效果
		
		//鼠标移入
		$(".middle").mouseenter(function(){
			//显示元素
			$(".middle .len").show()
			$(".big").show()
		});

		//鼠标移出隐藏元素
		$(".middle").mouseleave(function(){
			$(".middle .len").hide()
			$(".big").hide()
		});
		
		//鼠标指针在middle移动过程中，len元素跟着指针走
		$(".middle").mousemove(function(e){
			e=e||evert;
			var _pageX=e.pageX||(e.clientX+document.documentElement.scrollLeft||document.body.scrollLeft),
				_pageY=e.pageY||(e.clientY+document.documentElement.scrollTop||document.body.scrollTop);
			//将镜头在文档中定位到光标处
			
			//获取元素位置
			var w=parseInt($(".len").css("width"));
			var h=parseInt($(".len").css("height"));
			//元素位置与光标位置结合
			$(".len").offset({
				left:_pageX-100,
				top:_pageY-100,
			})
			//获取镜头在其有定位的父元素坐标系中定位位置
			var _top=$(".len")[0].offsetTop,
				_left=$(".len")[0].offsetLeft;
//				console.log(_top);
			if(_top<=0){
				_top=0;
			}else if(_top>=200){
				_top=200;
			}
			if(_left<=0){
				_left=0;
			}else if(_left>=200){
				_left=200;
			}
//			重新设置镜头在父元素中的定位
			$(".len").css({
				left:_left+"px",
				top:_top+"px"
			})
			
			//放大区中图片定位
			$(".big_picture").css({
				top:-2*_top+"px",
				left:-2*_left+"px"
			});

		});
		
		//点击—按钮实现数量的-1
		$(".wrap_input .min").click(function(){
			var total=$(".wrap_input .text_box").val();
				total=total-1;
				if(total<1){
					total=1;
				}
				$(".wrap_input .text_box").attr("value",total);
		})
		//点击+按钮实现数量的增加
		$(".wrap_input .add").click(function(){
			var total=Number($(".wrap_input .text_box").val());
				total=total+1;
				$(".wrap_input .text_box").attr("value",total);
		});
		
		
		
		
		var datalist;
		$.getJSON("/mock/list.json", function(data){			
			datalist=data;
		});
		//点击加入购物车实现添加购物车
		$(".add_shopping_bar").click(function(){
			
			//找出需要保存的信息的父元素
			var prod=$(this).parents(".goods_box"),pro_id;
//			console.log(prod);
			var pro_name.pro_imgsrc,pro_detail,pro_market_price,pro_special_price;
			var name=prod.children(".good-right .title").text();
			for(var i=0,len=datalist.length;i<len;i++){
				pro_detail=datalist[i].detail;
				if(name==pro_name){
					pro_id=datalist[i].id;
					pro_name=datalist[i].name;
					pro_imgsrc=datalist[i].imgSrc;
					pro_market_price=datalist[i].market_price;
					pro_special_price=datalist[i].special_price;
				}
			}
			//找到商品信息保存在对象中
			var product={
				product_id:pro_id,
				imgSrc:prod.children(".show .big_picture").attr("src"),
				name:prod.children(".good-right .title").text(),
				price:prod.children("#g_d_t").text(),
				amount:1
//				amount:prod.children(".wrap_input .text_box").val(),				
			}
			
			
			
			
			// 判断在 cookie 中是否有已存在的购物车数组结构
				// 使用 jquery 的 cookie 插件操作 cookie
				$.cookie.json = true; // 自动转换(对象和数组之间的转换)
				var _products = $.cookie("products") || [];//自动转换成数组
				
				//向数组中添加元素或修改元素
				//查找当前选购的商品的名称在数组一选购商品元素中是否存在
				var index=isExist(pro_id, _products);
				if(index===-1){
					//向数组中添加元素
					_products.push(product);
				}else{
					_products[index].amount++;
				}
				//将数组存回到cookie中
				$.cookie("products",_products,{expire:10});
				console.log($.cookie("products"));
			
		})
			
			// 查找指定id商品在 products 数组中是否已存在
			// 存在则返回在数组中的下标，否则返回-1
			function isExist(id, products) {
				for (var i = 0, len = products.length; i < len; i++) {
					if (products[i].id == id)
						return i;
				}

				return -1;
			}
			
		
		
		
		
		
		
		
	});		
})