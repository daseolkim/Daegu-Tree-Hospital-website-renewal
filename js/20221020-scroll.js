$("document").ready(function(){
    AOS.init()
    $(window).scroll(function(){
    // 윈도우선택자는 예제개념으로는 전체를의미하고 바꿀수있다.
    // console.log("")
        let pos = $(window).scrollTop();
        // 변함없이쓰이는 코드 위치잡을때!
        if (pos >= 200) {
            $("aside").show()
        } else {
            $("aside").hide()
        }

        if (pos >= $(".content").offset().top-400) {
            // console.log("확인")
            $(".content").addClass("on")
        } else {
            
        }

        // $("선택자").offset().top > 해당 컨텐츠의 위치의 스크롤 값을 가져온다 
        console.log($(".content").offset().top)
        






    })








})