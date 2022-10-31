$("document").ready(function(){
    // $("ul li") .eq(0).stop().animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(1).stop(0).delay(100).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(2).stop(0).delay(200).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(3).stop(0).delay(300).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(4).stop(0).delay(400).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(5).stop(0).delay(500).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(6).stop(0).delay(600).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(7).stop(0).delay(700).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(8).stop(0).delay(800).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(9).stop(0).delay(900).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(10).stop(0).delay(1000).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(11).stop(0).delay(1100).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(12).stop(0).delay(1200).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(13).stop(0).delay(1300).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(14).stop(0).delay(1400).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(15).stop(0).delay(1500).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(16).stop(0).delay(1600).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(17).stop(0).delay(1700).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(18).stop(0).delay(1800).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(19).stop(0).delay(1900).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)
    // $("ul li") .eq(20).stop(0).delay(2000).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)

    // $("ul li") .eq(21).stop(0).delay(2100).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)

    // $("ul li") .eq(22).stop(0).delay(2200).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)

    // $("ul li") .eq(23).stop(0).delay(2300).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)

    // $("ul li") .eq(24).stop(0).delay(2400).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)

    // $("ul li") .eq(25).stop(0).delay(2500).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)

    // $("ul li") .eq(26).stop(0).delay(2600).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)

    // $("ul li") .eq(27).stop(0).delay(2700).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)

    // $("ul li") .eq(28).stop(0).delay(2800).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)

    // $("ul li") .eq(29).stop(0).delay(2900).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)

    // $("ul li") .eq(30).stop(0).delay(3000).animate({
    //     marginLeft: "100px",
    //     opacity: "0"
    // }, 500)

    /*
    반복문 > 같은 작업을 반복해서 실핼할때 사용
    for/while/each 등 다양한 반복문을 사용할수있다
    그 이외도 추가적인건 존재


    ++ 증감 / -- 가감
    for (변수명; 조건문; 변수명++;){반복구문}
    for (변수명; 조건문; 변수명--;){반복구문}

    while (조건문) {반복구문++}
    while (조건문) {반복구문--}

    $("선택자").each(function(){반복구문 변수명++})
    $("선택자").each(function(){반복구문 변수명++})

    append - 선택한 요소의 마지막에 새로운 요소나 컨텐츠를 추가할때 사용하는속성
    prepend - 선택한 요소의 첫번째에 새로운 요소나 컨텐츠를 추가할때 사용하는속성

    */

    // for(let i = 0; i < $("ul li").length; i++){
    //     $("ul li") .eq(i).stop().delay(i*100).animate({
    //         marginLeft: "100px",
    //         opacity: "0"
    //     }, 500)
    // }


    let i = 0;

    // while(i < $("ul li").length){
    //     $("ul li") .eq(i).stop().delay(i*100).animate({
    //         marginLeft: "100px",
    //         opacity: "0"
    //     }, 500)
    //     i++;
    // }

    $("ul li").each(function(){
        $("ul li") .eq(i).stop().delay(i*100).animate({
            marginLeft: "100px",
            opacity: "0"
        }, 500)
        i++
    })




    for(let a = 1920; a < 2023; a++){
        console.log(a)
        $("#year").append("<option value='"+a+"'>'>"+a+"</option>")
    }
    for(let a = 2023; a < 1920; a--){
        $("#year2").append("<option value='"+a+"'>'>"+a+"</option>")
    }    
})