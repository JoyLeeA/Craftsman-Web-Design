$(document).ready(function(){
    //GNB
    $(".nav > ul > li").mouseover(function(){
       $(this).find(".submenu").stop().slideDown(200);
    });
    
    $(".nav > ul > li").mouseleave(function(){
       $(this).find(".submenu").stop().slideUp(200);        
    });
    
    //slide
    $(".slideList").find("slideImg:gt(0)").hide();
    var currentIndex = 0;
    var slideCount = $(".slideImg").length;
    
    setInterval(function(){
        var nextIndex = (currentIndex + 1) % slideCount;
        $(".slideList").find(".slideImg").eq(currentIndex).stop().fadeOut();
        $(".slideList").find(".slideImg").eq(nextIndex).stop().fadeIn();
        currentIndex = nextIndex;
    }, 3000);
    
    //tab-menu
    var tabBtn = $(".tab-btn > ul > li");
    var tabCont = $(".tab-cont > div");
    tabCont.hide().eq(0).show();
    tabBtn.click(function(e){
        e.preventDefault;
        var target = $(this);
        var targetIndex = target.index();
    tabBtn.removeClass("active");
    tabBtn.eq(targetIndex).addClass("active");
    tabCont.hide().eq(targetIndex).show()
    });
    
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