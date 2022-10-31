$("document").ready(function(){
    $(".side-nav > ul li").eq(0).addClass("on")
    $(".side-nav > ul li").eq(0).click(function(e){
        e.preventDefault();
        $(".side-nav > ul").toggleClass("on")
        $(".side-nav > ul li").eq(0).toggleClass("on")
        $(".side-nav > ul li").eq(0).find("i").toggleClass("fa-times fa-bars")
        $(".side-nav .side-content").toggleClass("on")
    })
})