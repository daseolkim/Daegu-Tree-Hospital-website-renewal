$("document").ready(function () {
    $(".show").click(function(){
        $(".box3").show()
    })
// 논 상황에서 디스플레이 상황을 변경시키고 싶을때
    // show버튼을 클릭했을때 기능을 추가하는 이벤트 box3 번을 요소에서 화면에 나타낸다. 속성 .show를 사용
    // show() - 해당 요소를 display 속성을 변경해 보여지게 하는 속성

    $(".hide").click(function(){
        $(".box1").hide();
    })
    // hide버튼을 클릭했을때 기능을 추가하는 이벤트
    // box1번을 화면에서 삭제 한다. 속성 .hide() 사용
        // hide() - 해당 요소를 display 속성을 변경해 사라지게 하는 속성

    $(".toggle").click(function(){
        $(".box2").toggle();
    })
    // toggle버튼을 클릭했을때 기능을 추가하는 이벤트
    // box2번을 화면에서 나타내거나 삭제한다. 속성 .toggle를 사용
    // toggle() - 위 두가지 속성(show/hide)를 동시에 가진속성

    $(".fadein").click(function(){
        $(".box3").fadeIn(1000);
    })
    // fadein버튼을 클릭했을때 기능을 추가하는 이벤트
    // box3번을 화면에서 페이드 효과로 나타낸다. 속성 .fadeIn()
    // fadeIn()보여지지 않는 요소를 display 속성을 변경하고  opacity효과를 추가적으로 주면서 트랜지션을 포함하며 나타 낼때사용하는 속성
    $(".fadeout").click(function(){
        $(".box2").fadeOut();
    })
        // fadein버튼을 클릭했을때 기능을 추가하는 이벤트
    // box3번을 화면에서 페이드 효과로 사라진다. 속성 .fadeOut()
    // fadeOut()보여지는 요소를 display 속성을 변경하고  opacity효과를 추가적으로 주면서 트랜지션을 포함하며 삭제 할때 사용하는 속성
    $(".fadetoggle").click(function(){
        $(".box1").fadeToggle();
    })
    // fadetoggle 버튼을 클릭했을때 기능을 추가하는 이벤트
    // box1번을 화면에서 페이드 효과로 나타내거나 삭제 한다. 속성 .fadeToggle()사용
    // fadeToggle() - 위 두가지 속성(fadeIn/fadeOut)을 동시에 가진 속성


    $(".addclass").click(function(){
        $(".box1").addClass("fixed");
    })
    //해당선택자에 클래스를 추가하는 속성
    // addClass 작성시에는 클래스 선택자 .은 생략한다 
    // 여러개 작성시에는 스페이스 형식으로 여러개 추가가능합니다.
    // 예).addClass("bgc color fixed");
    // bgc클래스 / color 클래스 fixed 클래스가 동시에 적용

    $(".removeclass").click(function(){
        $(".box2").removeClass("bgc");
    })
    //해당선택자에 클래스를 삭제하는 속성
    // .removeClass 작성시에는 클래스 선택자 .은 생략한다 
    // 여러개 작성시에는 스페이스 형식으로 여러개 추가가능합니다.
    // 예).removeClass ("bgc color fixed");
    // bgc클래스 / color 클래스 fixed 클래스가 동시에 삭제

    $(".toggleclass").click(function(){
        $(".box4").toggleClass("color");
    })
    //해당선택자에 클래스를 추가+삭제하는 속성
    // .toggleclass 작성시에는 클래스 선택자 .은 생략한다 
    // 여러개 작성시에는 스페이스 형식으로 여러개 추가가능합니다.
    // 예).toggleClass ("bgc color fixed");
    // bgc클래스 / color 클래스 fixed 클래스가 동시에 삭제


    $(".slideup").click(function(){
        $(".box4").slideUp(1500);
    // 화면에서 보여지는 요소를 슬라이드 효과를 통해 해당요소를 삭제할때 사용하는 속성
    // (시간)
    })

    $(".slidedown").click(function(){
        $(".box3").slideDown(1000);
    // 화면에서 보여지지 않는 요소를 슬라이드 효과를 통해 해당요소를  나타낼때 사용하는 속성
    // (시간)
    })
    $(".slidetoggle").click(function(){
        $(".box1").slideToggle(1000);
    })
    // 위 두속성이 합쳐진 슬라이드 속성


/*
소괄호 사이() duration, easing , complate 를 사용가능 , 생략도 가능
duration = fast / slow 그리고 숫자로 표현이 가능하며, fast / slow 문자열이므로 "", '' 를 사용한다 
숫자는 1000당 1초롤 동작
fast - 200 / slow = 600 / default = 400 으로 동작한다,

easing - lonear / swing 을 사용할수있다.
linear - 일정한 속도록 동작
swing - 처음에 빨라졌다 천천히 느려짐 (기본값)

complate - 해당 이벤트가 완전히 종료 되었을때 실행

*/




});