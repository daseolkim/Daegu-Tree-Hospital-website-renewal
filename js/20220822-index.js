$("document").ready(function(){
    $(".side").click(function (e) {
        $("html, body").stop().animate({
            scrollTop: 0
        },1000)
        // top스크롤바 코드
    });
    $(".nav ul li").mouseover(function (e) { 
        e.preventDefault();
        let i = $(this).index()
        // alert(i)
        $(".nav ul li").removeClass("on").eq(i).addClass("on")
        $(".content").removeClass("on").eq(i).addClass("on")
        $(".content").hide().eq(i).show()
        

    });


})
