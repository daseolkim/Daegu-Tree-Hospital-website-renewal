$("document").ready(function(){
    
    
    
    $("html, body").contextmenu(function(e){
        // alert("우측마우스를 사용할 수 없습니다.")
        // 우측마우스 안나오도록 하는 코드
        e.preventDefault();

    $("html, body").click(function (e) { 
        $(".menu").hide();  
    })    


        let x = e.pageX;
        let y = e.pageY;
        // X = 가로축을 뜻하는 변수명으로 지정, 이벤트를 현재의 페이지 X좌표를 변수명 X에 값을 저장한다
        // Y = 가로축을 뜻하는 변수명으로 지정, 이벤트를 현재의 페이지 Y좌표를 변수명 X에 값을 저장한다


        console.log("가로:"+x,"세로:"+y)
        $(".menu").css("left", x+"px")
        $(".menu").css("top", y+"px").show()
    })


        let Fullpage = new fullpage(".fullpage",{
        sectionsColor: ["#000","aaa","#909","#dea"],
        anchors: ["m1","m2","m3","m4","m5"]

    })    


})