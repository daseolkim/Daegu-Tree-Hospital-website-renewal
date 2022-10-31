$("document").ready(function(){

    //쿠키를 설정할 함수를 미리선언한다.
    function setCookie(name, value, exiredays){
        // (이름, 쿠키값, 만료일)

        //현재의 시간을 년 월 일 시분초를 가져와 todayDate 변수에 저장한다.
        let todayDate = new Date();
        //가져온 시간 데이터를 todayDate 변수에 값을 저장한다.
        todayDate.setDate(todayDate.getDate() + exiredays);

        //쿠키 저장 시간을 셋팅한다
        //쿠키값을 만들어주며 쿠키명/ 쿠키값 / 경로 / 쿠키종료일자
        // 한글깨짐 방지를 위하여 escape 속성을 사용
        //escape -  모든 컴퓨터에서 읽을 수 있도록 문자열을 인코딩


        document.cookie = name +"="+escape(value)+"; path=/; expires="+todayDate.toGMTSring+";"
    }
    // 창을 닫는 함수를 선언
    function closePopup(){
        /* 
        문서 내 투데이 체크박스 폼의 체크가 되어있다면 쿠키를 설정한다
        쿠키명/ 쿠키값/ 만료일을 설정
        쿠키명 = 영문으로 작성(한글 안됨 대신에 영문은 아무렇게 사용가능)
        쿠키값 = 영문으로 작성(한글 가능 아무거나 가능)
        만료일 = 숫자로만
        
        예)만료일이 1일경우 1일동안 쿠키가 유지
        예)만료일이 7일경우 7일동안 쿠키가 유지
        예)만료일이 365일경우 365일동안 쿠키가 유지
        예)만료일이 -1일경우 쿠키가 삭제 
        */

        if(document.today.chk.checked){
            // "아무거나 적어도됨" 하루동안 쿠키가유지
            setCookie("popup", "aaa", 1)
        }
        // 쿠키가 설정이 완료되면 팝업을 화면에서 닫는다
        $(".popup").hide();
    }
    let cookieDate = document.cookie;
    console.log(cookieDate)
    //현재 문서 내 저장된 쿠키를 변수명 cookieDate 에 값을 저장한다

    /*
    문자열 내에서 특정한 문자열의 인덱스 (위치) 값을 리턴하는속성 - indexOf
    탐색하려는 문자열이 있는지 없는지 여부를 체크하고
    해당 조건문에 의해 해당 문자열이 있다면 0 의 값을 리턴하며,
    해당 조건문에 의해 해당 문자열이 없다면 -1값을 리턴한다.

    > -1 값일때는 쿠키가 미설정 상태이므로 팝업창이 화면에서 출력 되고 쿠키가 설정이 된 상태라면 값이 0이 되므로 팝업이 나오지 않는 원리로 동작
    
    */
    
    if(cookieDate.indexOf("popup=aaa") < 0){
        $(".popup").show();
        //참 > -1값 > 즉 쿠키가 미설정된상태 , 공지사항이 나오는 곳

    }else{
        $(".popup").hide();
        //거짓 > 0 > 즉 쿠키가 설정된상태 , 공지사항이 나오지않는 곳

    }
    //레이블 클릭 시 함수 closePopup(); 을 실행해 쿠키를 설정한다.
    $("label").click(function(){
        closePopup();
    })
    //쿠키 지우기를 클릭시 쿠키값 삭제를 위해 만료일을 -1값으로 셋팅한다.
    $(".delete").click(function(){
        setCookie("popup", "", -1)
    })
    //새로고침 클릭시 화면을 새로고침한다.
    $(".reload").click(function(){
        location.reload()
    })



})