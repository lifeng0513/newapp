//监测
document.addEventListener("plusready",function(){
//	当前窗口
var curr=plus.webview.currentWebview();
//服务器地址
//var urlarr=[{url:"http://localhost/phpcms/index.php",title:"首页"},{url:"_www/html/index2.html",title:"首页2"},{url:"_www/html/index3.html",title:"首页3"},{url:"_www/html/index4.html",title:"首页4"}]
//本地地址
var urlarr=[{url:"_www/html/index2.html",title:"首页"},{url:"_www/html/index3.html",title:"视频"},{url:"_www/html/index4.html",title:"我的"}]
//创建窗口
var son=plus.webview.create(urlarr[0].url,"",{top:"44px",bottom:"50px"});
//等待时间
curr.append(son);
//事件监听
//等待
son.onloaded=function(){
	plus.nativeUI.showWaiting( "Loading......", {} );
}
//加载完后，等待自动消失 
son.onloaded=function(){
	plus.nativeUI.closeWaiting( "Loading........");
}

document.getElementById("title").innerHTML=urlarr[0].title;
//添加事件（tap点击事件）
mui("nav").on("tap",".mui-tab-item",function(){
//	点击底部对应页面
	var index=$(".mui-tab-item").index(this);
	son.loadURL(urlarr[index].url);
	alert(index)
	//窗口加载页面
	document.getElementById("title").innerHTML=urlarr[index].title;
})



})
















//简化的监测
//mui.ready(function(){
//	
//})