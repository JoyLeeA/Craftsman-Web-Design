$(document).ready(function(){
//GNB
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul.submenu").stop().slideDown(200)
    });

    $(".nav > ul > li").mouseleave(function(){
        $(".nav > ul > li > ul.submenu").stop().slideUp(200)
    });
    
//SLIDE
    var currentIndex = 0;
    
    setInterval(function(){
        if (currentIndex < 2) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
        var slidePosition = currentIndex * (-300)+"px"
        $(".slideList").animate({top: slidePosition}, 400);
        
    }, 3000);
    
//TAP-MENU
    var tabBtn = $(".tab-btn > ul > li");
    var tabCont = $(".tab-cont > div");
    
    tabCont.hide().eq(0).show();

    tabBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "block");
    });
    
//Layer Popup
    $(".popup").click(function(){
        $(".layer").css("display", "block");
        $(".layer-bg").css("display", "block");
    });
    $(".close").click(function(){
        $(".layer").css("display", "none");
        $(".layer-bg").css("display", "none");
    });
});
