$("document").ready(function(){



    // 리스트변수명으로 새로운 배열을 추가한다.
    let list = [];
    // 반복문을 통해 해당 i 값을 리스트 변수명에 추가 한다.
    // 해당 작업은 총개수 만큼 반복하므로 0~5까지 데이터가 추가된다
    for(let k = 0; k < $(".slide .menu ul li").length; k++){

        list.push(k);
    }

    // 결과값을 배열에 추가하기 위해 result 변수설정
    let result = [];

    for(let k = 0; k < $(".slide .menu ul li").length; k++){


        let rand = Math.floor(Math.random() * list.length)
        console.log(rand)
        // 기존 배열에서 선택된 번호는 해당 인덱스를 제거
        let num = list[rand];
        list.splice(rand, 1);
        result.push(num);
        console.log(result)


        // 슬라이드 배경 리스트 이미지의 6개의 요소에 랜덤값으로 출력된 번호 + 1을 적용하여 랜덤으로 이미지를 출력
        // +1 을 해주는 이유는 0번부터 시작인데 이미지 이름은 1번부터 시작이여서..

        // 2번의 경우 확장자가 png인경우 조건문을 통하여 png로설정

    if (result[k] == 1) {
        $(".slide > ul > li").eq(k).find("img").attr("src", "../images/coupang/slide-"+(result[k]+1)+".png")
        $(".slide .menu ul li").eq(k).find("img").attr("src", "../images/coupang/slide-m-"+(result[k]+1)+".png")
    } else {
        $(".slide .menu ul li").eq(k).find("img").attr("src", "../images/coupang/slide-m-"+(result[k]+1)+".jpg")
        }
    }

    // 화면로딩시 첫번째 요소에 활성화를 위해 on클래스를 추가
    $(".slide .menu ul li").eq(0).addClass("on")
    
    // 배너 순서 및 타이머 값을 연동하기 위해 변수 추가
    let idx = 0;

    
    // 슬라이드 메뉴 리스트에 마우스가 올라갓을때 이벤트설정
    $(".slide .menu ul li").mouseover(function () { 
        // 마우스올렸을때 클래스적용을 위해 현재의 인덱스 값을 idx 와 연동
        idx=$(this).index();

        // 기존에 적용된 슬라이드메뉴의 온 클래스를 모두 삭제하고 현재의 인덱스 값에 온 클래스를 추가한다 여기바꾸기!!!!!!!!!!!!
        $(".slide .menu ul li").removeClass("on").eq(idx).addClass("on")

        // 슬라이드 화면에서 모두지우고 현재의 인덱스값애 슬라이드를 보여준다.
        $(".slide > ul li").hide().eq(idx).show()
        // 마우스가 메뉴에 올라갔을때 타이머를 멈춘다
        clearInterval(timer);

          // 슬라이드 메뉴 리스트에 마우스가 빠져나갓을때 이벤트설정
        }).mouseover(function () { 
        // 마우스가 빠져나갓을때 타이머 버그 방지를 위하여 타이머를 한번 더 멈춘다.
        clearInterval(timer);
        // 마우스가 빠져 나갔을때 타이머를 재 설정한다.
        timer = setInterval(function(){
        // 3초마다 idx값을 증감 시킨다.
        idx++;
        if(idx > $(".slide > ul > li").length-1){
            idx = 0;
        }
        // 슬라이드 화면에서 모두지우고 현재의 인덱스값에 슬라이드를 보여준다.
        $(".slide > ul li").hide().eq(idx).show()
        $(".slide .menu ul li").removeClass("on").eq(idx).addClass("on")
        }, 3000)
    });

    let timer = setInterval(function(){
// 3초마다 idx값을 증감 시킨다.
        idx++;
        if(idx > $(".slide > ul > li").length-1){
            idx = 0;
        } // 기존에 적용된 슬라이드메뉴의 온클래스를 모두 삭제하고 현재의 인덱스 값에 온 클래스를 추가한다 여기바꾸기!!!!!!!!!!!!!!!!!
        $(".slide .menu ul li").removeClass("on").eq(idx).addClass("on")

        // 슬라이드 화면에서 모두지우고 현재의 인덱스값애 슬라이드를 보여준다.
        $(".slide > ul li").hide().eq(idx).show()
    }, 3000)
})