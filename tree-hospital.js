$("document").ready(function(){

    $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on")
    let page = new fullpage(".fullpage", {
        anchors: ["MAIN", "content1", "content2", "content3", "WEBSITE", "MAP"],
        // sectionsColor: ["#aaa", "coral", "blue", "orange" ,"orangered", "darkorange"],
        navigation: true,
        navigationTooltips: ["MAIN", "나무병원 소개", "수목관리 상담절차", "병해충 정보", "WEBSITE", "MAP"],
        navigationPosition: "left",
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
            // 구역을 불러들이고 나서 스크롤이 끝나면 이벤트가 실행

            
            if(destination.index == 0,1,2,3,4,5,6){
            $(".section").find('[data-aos]').addClass("aos-animate")
            }
            // 구역을 불러들이고 나서 스크롤이 끝나면 이벤트가 실행
            },
        
        afterRender: AOS.init()
        })

        
    


    function swiperFunc(id){
    const swiper = new Swiper(id,{
        autoplay: {
            delay: 2500
        },
        slidesPerView: 4,
        spaceBetween: 50,
        loop: true,
        navigation:{
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev"
        },
        
    })
}
    swiperFunc(".swiper.pestinfo-swiper-1")
    $(".pestinfo-bottom-wrap ul li").click(function(){
        let i = $(this).index();
        $(".swiper").hide().eq(i).show()
        swiperFunc(".swiper.pestinfo-swiper-"+(i+1))        
    })

    $(".pestinfo-bottom  .pestinfo-bottom-wrap ul li:nth-child(1) a::after").addClass("on")

        $(".pestinfo-bottom .pestinfo-bottom-wrap ul li").click(function(){
            let i = $(this).index();
            $(".pestinfo-bottom .pestinfo-bottom-wrap ul li").removeClass("on").eq(i).addClass("on")
            $(".pestinfo-bottom").removeClass("on").eq(i).addClass("on")
            swiperFunc(".swiper.pestinfo-swiper-"+(i+1))
        })

});