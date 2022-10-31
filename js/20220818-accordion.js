$("document").ready(function () {
    $(".faq ul li.q").click(function (e) { 
        e.preventDefault();
        // $(this).next().slideToggle()
        // naxt는 다음을 선택한다 같은라인의 다음요소!

        $(this).next().slideToggle().siblings("li.a").slideUp()
        // siblings("요소") - 주변의 형제를 선택
    });


    
});