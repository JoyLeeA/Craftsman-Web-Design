$(document).ready(function(){
    //GNB
    $(".nav > ul > li").mouseover(function(){
         $(this).find(".submenu").stop().slideDown(200)
      });
    
    $(".nav > ul > li").mouseleave(function(){
     $(this).find(".submenu").stop().slideUp(200)
  });
    
    //SLIDE
    $(".slideList").children("div:gt(0)").hide();
    var current = 0;
    
    setInterval(function(){
        var next = (current + 1) % 3; 
        $(".slideList").find("div").eq(current).fadeOut();
        $(".slideList").find("div").eq(next).fadeIn();
        current = next;
        
    }, 3000);
    
    //TAP-MENU
    var tabBtn = $(".tab-btn > ul > li");
    var tabCont = $(".tab-cont > div");
    
    tabCont.hide().eq(0).show();
    
    tabBtn.click(function(e){
        e.preventDefault;
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "block");
    });
    
    //LAYER-POPUP
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