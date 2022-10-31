$("document").ready(function(){
    $("html *").attr("data-dark", "false");

    const dark_mode = localStorage.getItem("dark_mode");
    console.log(dark_mode)

    if(!dark_mode){
        $("html *").attr("data-dark", "false");
        $(".header .etc ul li i").eq(0).removeClass("fa-moon").addClass("fa-sun");
        $(".dark-btn i").eq(0).removeClass("fa-moon").addClass("fa-sun");
        $(".contact-content .sns ul li").eq(4).find("img").attr("src","images/talk.png");
    }else{
        $("html *").attr("data-dark", "true");
        $(".header .etc ul li i").eq(0).removeClass("fa-sun").addClass("fa-moon");
        $(".dark-btn i").eq(0).removeClass("fa-sun").addClass("fa-moon");
        $(".contact-content .sns ul li").eq(4).find("img").attr("src","images/talk-dark.png");
    }

    $(".header .etc ul li").eq(0).click(function(e){
        e.preventDefault();
         if($("html *").attr("data-dark") == "true"){
            $("html *").attr("data-dark", "false");
            localStorage.removeItem("dark_mode")
            $(".contact-content .sns ul li").eq(4).find("img").attr("src","images/talk.png");
        }else{
            localStorage.setItem("dark_mode", "fa-moon")
            $("html *").attr("data-dark", "true");
            $(".contact-content .sns ul li").eq(4).find("img").attr("src","images/talk-dark.png");
        }
        $(this).find("i").toggleClass("fa-moon fa-sun")
        $(".dark-btn i").toggleClass("fa-moon fa-sun")

    })
    $(".dark-btn").click(function(e){
        e.preventDefault();
         if($("html *").attr("data-dark") == "true"){
            $("html *").attr("data-dark", "false");
            localStorage.removeItem("dark_mode")
            $(".contact-content .sns ul li").eq(4).find("img").attr("src","images/talk.png");
        }else{
            $("html *").attr("data-dark", "true");
            localStorage.setItem("dark_mode", "fa-moon")
            $(".contact-content .sns ul li").eq(4).find("img").attr("src","images/talk-dark.png");
        }
        $(this).find("i").toggleClass("fa-moon fa-sun")
        $(".header .etc ul li i").eq(0).toggleClass("fa-moon fa-sun")
    })


    const swiper = new Swiper(".swiper.web-swiper",{
        autoplay: {
            delay: 2000
        },
        slidesPerView: 1,
        loop: true,
        navigation:{
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev"
        },
        pagination:{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        
    })


    const swiper2 = new Swiper(".swiper.design-swiper",{
        // autoplay: {
        //     delay: 2000
        // },
        
        loop: true,
        navigation:{
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev"
        },
        pagination:{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        breakpoints: {
            360:{spaceBetween: 20, slidesPerView: 1},
            1024:{spaceBetween: 30,slidesPerView: 2},
            1400:{spaceBetween: 40,slidesPerView: 3}
        }
    })




    function skill(id, per){
        let bar = new ProgressBar.Line(id,{
            strokeWidth: 4,
            trailWidth: 4,
            color: "#ffa31b",
            duration: 1400,
            step: function(state, circle){
                circle.setText(Math.round(circle.value() * 100) +"%")
            }
        })
        bar.animate(per)
    }
    let pro_chk = false;
    
    let Fullpage = new fullpage(".fullpage",{
        sectionsColor: ["#140a42", "#f1f0f5", "#f1f0f5", "#f1f0f5", "#f1f0f5", "#f1f0f5"],
        anchors: ["home", "about", "web", "design", "contact", "footer"],
        navigation: true,
        navigationTooltips: ["홈", "프로필", "웹퍼블리싱", "디자인", "콘텍트", "푸터"],
        licenseKey : "603D3EBB-D1B84561-B40D98B6-7A87C3D7",
        afterLoad: function(origin, destination){
            // $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
            if(destination.index == 0){
                $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on")
            }
            if(destination.index == 1 && pro_chk == false){
                skill("#html", 0.7)
                skill("#css", 0.8)
                skill("#js", 0.6)
                skill("#ps", 0.9)
                skill("#ai", 0.7)
                skill("#of", 0.5)
                pro_chk = true
            }
        },
        onLeave: function(origin, destination){
            if(destination.index > 0){
                $(".header").fadeIn()
            }else{
                $(".header").fadeOut()
            }


            $(".header .nav ul li").removeClass("on").eq(destination.index).addClass("on")
            $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
        },
        responsiveWidth: 1200
    })
    



    let typed = new Typed("#typed1",{
        stringsElement : "#typed",
        typeSpeed: 100
    })
    $(".m-btn, .window, .m-nav ul li").click(function(){
        if(!$(".window-content").is(":visible")){
            $(".m-btn").toggleClass("on")
            $(".m-nav").toggleClass("on")
            $(".window").fadeToggle()
        }
    })

    $(".m-nav ul li").click(function(){
        let i = $(this).index();
        $("html, body").stop().animate({
            scrollTop: $(".section").eq(i).offset().top
        },1000)
    })





})