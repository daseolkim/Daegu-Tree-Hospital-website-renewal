$("document").ready(function(){
    const swiper = new Swiper(".swiper.test-slide", {
        autoplay: {
            delay:1000
        },
        slidesPerView: 3,
        loop: true,
        navigatoin:{
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev"
        },
        pagination:{
            el: ".swiper-pagination",
            clickable: true
        },
        centeredSlides: true,
        freeMode: true,
        spaceBetween: 20,
        breakpoints: {
            640:{freeMode: false, slidesPerView: 1},
            1024:{slidesPerView: 2},
            1400:{slidesPerView: 4}

        }
    })

    const banner = new Swiper(".swiper.banner-slide", {
        autoplay: {
            delay:1000
        },
        loop: true,
        navigatoin:{
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev"
        }
    })

})