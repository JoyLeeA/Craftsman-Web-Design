$(document).ready(function(){
    
    //GNB
    $(".nav > ul > li").mouseover(function(){
       $(this).find(".submenu").stop().slideDown(200);                   
    });
    $(".nav > ul > li").mouseleave(function(){
       $(this).find(".submenu").stop().slideUp(200);                   
    });  
    
    //Slide
    $(".slideList").find(".slideImg:gt(0)").hide();
    var current = 0;
    
    setInterval(function(){
        var next = (current + 1) % 3;
        $(".slideList").find(".slideImg").eq(current).stop().fadeOut();
        $(".slideList").find(".slideImg").eq(next).stop().fadeIn();
        current = next;
    }, 3000);

                  
                  
                  
                  
                  
                  
                  
                  
                  
});