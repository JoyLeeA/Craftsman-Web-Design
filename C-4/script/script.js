$(document).ready(function(){
    
    //GNB
    $(".nav > ul > li").mouseover(function(){
       $(this).css("background-color", "rgba(0,0,0,0.5)")    
       $(this).find(".submenu").stop().slideDown();                   
    });
    $(".nav > ul > li").mouseleave(function(){
        $(this).css("background-color", "") 
       $(this).find(".submenu").stop().slideUp();                   
    });  
    
    //Slide
    var currentIndex = 0;
    var slideCount = $(".slideImg").length;
    
    setInterval(function(){
        if (currentIndex < slideCount -1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        var slidePosition = (-800) * currentIndex + "px";
        $(".slideList").animate({left: slidePosition}, 300);
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