//实现require.js的配置
require.config({
	baseUrl:"/",//服务器根为基准
	paths:{
		"jquery":"lib/jquery/jquery-1.12.4.min",//可为数组，本地无资源可取网络中找
		"cookie":"lib/jquery_plugins/jquery.cookie",
		"template":"lib/arttemplate/template-native",	
		"load":"js/loadHeaderFooter",
		"bootstrap":"lib/bootstrap/js/bootstrap.min"
	}
});

























