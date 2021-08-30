$(document).ready(function(){
   //GNB
    $(".nav > ul > li").mouseover(function(){
       $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseleave(function(){
       $(this).find(".submenu").stop().slideUp(200);
    });
    
    //Slide
    var currentIndex = 0;
    var slideCount = $(".slideImg").length;
    
    setInterval(function(){
        var nextIndex = (currentIndex + 1) % slideCount;
        $(".slideList").find(".slideImg").eq(currentIndex).stop().fadeOut();
        $(".slideList").find(".slideImg").eq(nextIndex).stop().fadeIn();
        currentIndex = nextIndex;    
    }, 3000);
    
    //layer
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