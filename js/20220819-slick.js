$("document").ready(function(){
    $(".slick").slick({
        dots: true,
        // vertical: true
        // 위로하고싶으면 
        // arrows: false
        // 기본값

        slidesToShow: 4,
        // 슬라이드 갯수
        infinite: true,
        // 최대 갯수만큼하면 동작하지 않음 무한반복
        slidesToScroll: 4,
        // centerMode: true,
        autoplay: true,

        // 반응형
        responsive: [
            {
                // 반응형이 어느시점에서 돌건지 설정 현재 테블릿
                breakpoint: 1024,
                settings: {
                    autoplay: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {

                breakpoint: 640,
                settings: {
                    autoplay: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    })










})