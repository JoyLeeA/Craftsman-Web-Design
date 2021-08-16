$(document).ready(function(){
    //menu
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul.submenu").stop().slideDown(200)
    });

    $(".nav > ul > li").mouseleave(function(){
        $(".nav > ul > li > ul.submenu").stop().slideUp(200)
    });
    
    //slide
    var slideCount = $(".slideImg").length;
    var currentIndex = 0;
    
    setInterval(function(){
        if(currentIndex < slideCount-1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
    var slidePosition = currentIndex * (-1200) + "px";
    
    $(".slideList").animate({left: slidePosition}, 400);
    }, 3000);
    
    
    $(".popup").click(function(e){
        e.preventDefault;
        $(".layer").css("display","block");
        $(".layer-bg").css("display","block");
    });
    
        
    $(".close").click(function(e){
        e.preventDefault;
        $(".layer").css("display","none");
        $(".layer-bg").css("display","none");
    });
});