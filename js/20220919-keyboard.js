$("document").ready(function(){

    $(window).keydown(function(e){
        // 키보드의 값을 아스키코드로 나타내며, 단독으로 사용할수없다.
        let key = e.keyCode;
        console.log(key)

// 이코드는 유용함 이걸로인해 연타를 하면 버그잡힘
        if($(".box").is(":animated")){
            return
        }



        if(key == 65){
            alert("a 버튼을 사용할 수 없습니다")
            return;

        }
        if(key == 37){
            if($(".box").css("left")<= "15px"){
                return;
            }
            $(".box").stop().animate({
                left: "-=100px"
            }, 600)
        }
        if(key == 38){
            if($(".box").css("top")<= "0px"){
                return;
            }
            $(".box").stop().animate({
                top: "-=100px"
            }, 600)
        }
        if(key == 39){
            $(".box").stop().animate({
                left: "+=100px"
            }, 600)
        }
        if(key == 40){
            $(".box").stop().animate({
                top: "+=100px"
            }, 600)
        }
    })
})    