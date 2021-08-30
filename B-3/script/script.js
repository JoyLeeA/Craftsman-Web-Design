$(document).ready(function(){
   
    //GNB
    $(".nav > ul > li").mouseover(function(){
       $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseleave(function(){
       $(this).find(".submenu").stop().slideUp();
    });
    
    //slide
    var currnetIndex = 0;
    let slideCount = $(".slideImg").length
    
    
    setInterval(function(){
        if (currnetIndex < slideCount - 1) {
            currnetIndex++;
        } else {
            currnetIndex = 0;
        }
        
        var slidePosition = (-300) * currnetIndex + "px";
        $(".slideList").animate({top: slidePosition}, 300);    
        console.log(slidePosition);
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