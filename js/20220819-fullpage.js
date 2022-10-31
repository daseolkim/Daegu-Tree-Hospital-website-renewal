$("document").ready(function() {
    $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on")
    let page = new fullpage(".fullpage", {
        sectionsColor: ["orange", "#dea", "#709", "skyblue", "red"],
        anchors: ["menu1", "menu2", "menu3", "menu4", "menu5"],
        navigation: true,
        navigationPosition: "left",
        navigationTooltips: ["메뉴1", "스킬부분", "컨텐츠", "할인공간", "오후"],
        slidesNavigation: true,
        onLeave: function(origin, destination, dirextion){
            // 구역을 떠나고 새로운 구역으로 이동 도중 이벤트 실행
            // origin - 활성화된 구역
            // destination - 목적지 구역
            // dirextion - 마우스 휠 방향
            $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
        },
        afterLoad: function(origin,destination){
            if(destination.index == 0){
                $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on")
            }



            
            if(destination.index == 3){
                $(".section *").find('[data-aos]').addClass("aos-animate")
            }
            // 구역을 불러들이고 나서 스크롤이 끝나면 이벤트가 실행
        },
        afterRender: AOS.init()
    })




});