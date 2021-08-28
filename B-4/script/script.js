$(document).ready(function(){
    //GNB
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200)    
    });
    $(".nav > ul > li").mouseleave(function(){
        $(this).find(".submenu").stop().slideUp(200)    
    });
    
    //Slide
    var slideCount = $(".slideImg").length;
    var currentIndex = 0;
    
    setInterval(function(){
        if (currentIndex < slideCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    
    var currentPosition = (currentIndex * (-1200)) + "px";
    $(".slideList").animate({left: currentPosition}, 300);
    
    console.log(currentPosition) 
    }, 3000);

});