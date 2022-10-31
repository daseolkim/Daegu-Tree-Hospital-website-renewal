$("document").ready(function(){
    /*해당 컨텐츠의 스크롤이벤트이냐, 전체 스크롤 이벤트이냐를 먼저 체크!
    scroll event > 스크롤 바의 위치에 따라 영향을 주는 이벤트
    전체 스크롤 이벤트 선택자 > window 선택자
    해당 컨텐츠의 이벤트 선택자 > css 선택자
    전체 스크롤 이벤트 선택자인 window의 경우 문자열이 아니므로 "" 혹은 ''를 입력해서는 안된다.
    */


    let floating_top = parseInt($(".floating").css("top"));
    // alert(floating_top)
    // parseInt 해당 데이터 값 중에 다른 값을 모두 제외하고 오로지 수치만 가지고 오는 속성
    // 위 예제 기준으로 floating_top 값은 100px이지만 px글자를 잘라내고 100 이라는 숫자 데이터만 가져온다.


    $(".nav ul li").eq(0).addClass("on")
    $(".indicator ul li").eq(0).addClass("on")

    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        let current = (pos / ($(document).outerHeight() - $(window).height())) * 100;
        // 무조건 이코드사용으로 변함없다
        //outerHeight - 보더를 포함한 세로 길이값
        // $(window).height - 현재 전체 세로 길이값
        

        $(".bar").width(current+"%")
        $(".floating").stop().animate({
            top: floating_top + pos
        })

        if (pos >= 150) {
            $(".nav").addClass("on")
            $(".nav ul").addClass("on")
        } else {
            $(".nav").removeClass("on") 
            $(".nav ul").removeClass("on")
        }

        if (pos >= 250) {
            $(".aside").fadeIn()
            
        } else {
            $(".aside").fadeOut()
        }

        let new_pos = Math.floor(pos / $(".section").height());

        // Math.floor() - 소수점 이하를 버림
        // Math.ceil() - 소수점 이하를 올림
        // Math.round() - 소수점 이하를 반올림

        $(".nav ul li").removeClass("on").eq(new_pos).addClass("on")
        // 메뉴밑에 내리면 자동으로 밑줄그이도록 
        $(".indicator ul li").removeClass("on").eq(new_pos).addClass("on")
        // 메뉴밑에 내리면 인디게이터 바뀌도록

// 스크롤 누르면 올라가는 코드 변함없음
        $(".aside").click(function(){
            $("html, body").stop().animate({
                scrollTop: 0
            },1000)
        })
    })

    $(".nav ul li, .indicator ul li").click(function(event){
        let i = $(this).index();
        event.preventDefault()
        

        // offset() 해당 선택자의 위치 값을 찾을 때사용하는 속성
        // .top , .left
        // top 스크롤의 탑 값의 위치를 반환한다. 주의 사함은 top 소괄호 없음
        // ex) $(".section").eq(3).offset().top
        // .section:nth-child(4)의 위치값을 반환한다.
        $("html, body").stop().animate({
            scrollTop: $(".section").eq(i).offset().top
        })

    })

})