$(document).ready(function(){
    
    //GNB
    $(".nav > ul > li").mouseover(function(){
       $(".nav > ul > li").find(".submenu").stop().slideDown();                   
    });
    $(".nav > ul > li").mouseleave(function(){
       $(".nav > ul > li").find(".submenu").stop().slideUp();
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

                  
                  
    //Layer-Popup
    $(".popup").click(function(e){
        e.preventDefault;
        $(".layer").css("display", "block");
        $(".layer-bg").css("display", "block");
    }); 
    
    $(".close").click(function(e){
        e.preventDefault;
        $(".layer").css("display", "none");
        $(".layer-bg").css("display", "none");
    });
                  
                            
});