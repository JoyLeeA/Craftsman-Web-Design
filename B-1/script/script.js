$(document).ready(function(){
    
    //GNB
    $(".nav > ul > li").mouseover(function(){
       $(".nav > ul > li").find(".submenu").stop().slideDown(200) 
    });
    
    $(".nav > ul > li").mouseleave(function(){
       $(".nav > ul > li").find(".submenu").stop().slideUp(200) 
    });
    
    //tab-menu
    var tabBtn = $(".tab-btn > ul > li");
    var tabCont = $(".tab-cont > div");
    
    tabCont.hide().eq(0).show();
    
    tabBtn.click(function(e){
        e.preventDefault;
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.hide().eq(index).show();
    
    //layer
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
});