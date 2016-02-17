$(function(){
//	开始拖拽
var lefts;
 $(".btn-box").on("dragstart",".btn",function(e){
// 	  	alert(1)
// 	先转为整型才可拖拽
     lefts=parseInt($(this).css("marginLeft"))||0;
 })
//	导航拖拽
  $(".btn-box").on("drag",".btn",function(e){
//	alert(1)
  	$(this).css("marginLeft",lefts+e.detail.deltaX);
//	输出事件属性
//     for(var i  in e){     console.log(i+"="+e[i]+"\n"); }   alert(1)
//常用事件
//		console.log("X"+e.detail.deltaX+"\n")
//		console.log("Y"+e.detail.deltaY+"\n")
//		console.log("LENGTH"+e.detail.distance+"\n")
//		console.log("方向"+e.detail.direction+"n")
//		console.log("速度"+e.detail.velocity+"\n")
	})
})
