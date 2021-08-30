$(document).ready(function(){
   
    //GNB
    $(".nav > ul > li").mouseover(function(){
       $(".nav > ul > li").find(".submenu").stop().slideDown(); 
    });
    $(".nav > ul > li").mouseleave(function(){
        $(".nav > ul > li").find(".submenu").stop().slideUp(); 
    });
    
    //slide
    var cunrrentIndex=0;
    var slideImgLength = $(".slideImg").length;
    
    setInterval(function(){
        if (cunrrentIndex < slideImgLength - 1) {
            cunrrentIndex++;
        } else {
            cunrrentIndex = 0;
        }
        
        slidePosition = (-300) * cunrrentIndex + "px";
        $(".slideList").animate({top: slidePosition}, 300);
    }, 3000);
    
    //popup
    $(".popup").click(function(e){
        e.preventDefault;
        $(".layer-bg").css("display", "block");
        $(".layer").css("display", "block");
    });
    $(".close").click(function(e){
        e.preventDefault;
        $(".layer-bg").css("display", "none");
        $(".layer").css("display", "none");
    });    
});