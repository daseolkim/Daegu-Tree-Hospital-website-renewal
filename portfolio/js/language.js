$("document").ready(function(){
    const url = new URL(location.href).searchParams;
    const lang = url.get("Lang");


    const kr_nav = new Array("홈", "프로필", "웹퍼블리싱", "디자인","컨텍트")
    const en_nav = new Array("Home", "Profile", "Web Publishing", "Design","Contact")

    const typed = new Array("성장하는 웹디자이너 &amp; 웹퍼블리셔 김다설 입니다. 다음 페이지를 보실려면 아래 버튼을 클릭 해주세요","Growing Web Designer &amp; This is web publisher DaSeol Kim. Click the button below to view the next page")
    const main_btn = new Array("프로필", "Profile")



    let nav_link = [];

    for(let i = 0; i < $(".header .nav ul li").length; i++){
        nav_link.push($(".header .nav ul li").eq(i).find("a").attr("href"));
    }


    if(lang == undefined || lang == "kr"){
        // alert("한국어")
        $(".header .etc ul li ul li").eq(0).addClass("on")
        $(".header .logo a").attr("href", nav_link[0]+"?Lang=kr")
        $("#typed p").html(typed[0])
        $(".type a").html(main_btn[0])
        kr_nav.map(function(item, index){
            $(".header .nav ul li").eq(index).find("a").text(item)
            $(".header .nav ul li").eq(index).find("a").attr("href", nav_link[index]+"?Lang=kr")
        })
    }else{
        // alert("영어")
        $(".header .etc ul li ul li").eq(1).addClass("on")
        $(".header .logo a").attr("href", nav_link[0]+"?Lang=en")
        $("#typed p").html(typed[1])
        $(".type a").html(main_btn[1])
        en_nav.map(function(item, index){
            $(".header .nav ul li").eq(index).find("a").text(item)
            $(".header .nav ul li").eq(index).find("a").attr("href", nav_link[index]+"?Lang=en")
        
        })
    }
})