// JavaScript Document$(function(){
 $('#number li').mouseover(function(){
  $("#"+this.id).addClass("selected").siblings().removeClass("selected");
  $('.pic li img').fadeIn(4000).attr("src","images/"+(this.id)+".jpg");
  });
/*首页广告效果*/

$(function(){
     var len  = $(".num > li").length;
  var index = 0;
  var adTimer;
  $(".num li").mouseover(function(){
  index  =   $(".num li").index(this);
  showImg(index);
  }).eq(0).mouseover(); 
  //滑入 停止动画，滑出开始动画.
  $('.content').hover(function(){
    clearInterval(adTimer);
   },function(){
    adTimer = setInterval(function(){
       showImg(index)
    index++;
    if(index==len){index=0;}
     } , 2000);
  }).trigger("mouseleave");
})
// 通过控制top ，来显示不同的幻灯片
function showImg(index){
        var adHeight = $(".content_middle .content").height();
  $(".pic").stop(true,false).animate({bottom : -adHeight*index},1000);
  
      $(".num li").removeClass("on")
   .eq(index).addClass("on");
}

















{


 var Set=function(){
   var menu= document.getElementById("nav").getElementsByTagName("li");
   for(i=0;i<menu.length;i++){         
        if(menu[i].className=="li_a"){
	        menu[i].onmouseover=function(){
	            this.getElementsByTagName("ul")[0].style.display="block";
				this.getElementsByTagName("ul")[0].style.width="80px";
				this.getElementsByTagName("ul")[0].style.height="100px";
				this.getElementsByTagName("ul")[0].style.position="absolute";
                }
			menu[i].onmouseout=function(){
	            this.getElementsByTagName("ul")[0].style.display="none";
                }
        }
   }
 }
 window.onload=Set; 
 


 
 
 
 
 
 
 
}
 
 




