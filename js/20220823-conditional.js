$("document").ready(function(){
    let count = 0;
    // 변수명 카운트라는 이름으로 값을 0으로 "임시저장"

    // 변수명 카운트를 span태그에 텍스트 출력
    // 버튼클릭이벤트생성
    $("span").text("카운트 값은 "+count)
    $("button").click(function(){
        let i = $(this).index();
        // alert(i) 확인 각버튼에 0번 왼쪽 / 1번 오른쪽이뜬다
        // 현재의 인덱스값을 변수명 i 에 임시저장

        if(i == 0){
            count--;
            if( count < 0 ){
                count = 2;
            }
        }else{
            count++;
            if(count > 2){
                count = 0;
            }
            if(count == 2){
                $(".box").fadeOut();
            }else{
                $(".box").fadeIn();
            }
        }
        $("span").text("카운트 값은 "+count)  
    })//버튼클릭

    $(".nav ul li").click(function(){

        let i = $(this).index();
        if(i > 3 && !$(this).hasClass('on')){
            // 해당요소dp 클래스가 있는지 여부를 체크 > hasClass
            // ! > 부정 > 없다면
            $(".nav ul li").eq(i).toggleClass("on")
            $(".nav ul li").not(":eq("+i+")").removeClass("on")
            // not - css와 동일 하게 선택한 요소를 제외한 나머지 요소를 선택
        }else{
            $(".nav ul li").removeClass("on")
        }
    })

})
//jquery끝

// 조건문은 원하는 조건이 참이거나 거짓일때 동작한다,
// 조건문 사용시 부등호에 따라 값이 변한다.
// 거짓일때는 생략이 가능하다.
// if(조건문){참일경우}
// if(조건문){참일경우}else{거짓일경우}
// if(조건문){참일경우}else if{또 다른 조건문}{참일경우}
// if(조건문){참일경우}else if{또 다른 조건문}{참일경우}else{거짓일경우}

// a > b a는 b보다 크다
// a < b a는 b보다 작다
// a >= b a 는 b보다 크거나 같다
// a <= b a 는 b보다 작거나 같다
// a == b a는 b와 같다 > 문자열과 데이터 형태를 구분하지 않고 값만 같다면 true값이 나온다.
// 예) "1000" == 1000 > 같다
// a === b a 는 b와 같다 > 문자열과 데이터 형태를 구분해서 사용한다.
// 예) "1000" === 1000 > 다르다 (보다 정확하게 값을 비교할때 사용)
// a ! = b a는 b와다르다

// ++ > 증감 해당 변수의 인트(숫자) 값을 증감 시킨다.
// -- > 가감 해당 변수의 인트 (숫자) 값을 가감 시킨다.
// 조건에 의해 계속 낮아지거나 / 높아지는 것을 방지하기 위해
// 조건문을 통해 해당 값을 초기화 시킨다.
// count값이 0 보다 작으면 마이너스 값이 나오므로 최대값으로 변경하고
// count값이 최대값보다 크면 안되므로 0으로 변경한다.