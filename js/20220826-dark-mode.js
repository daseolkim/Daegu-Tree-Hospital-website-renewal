$("document").ready(function(){

    $("html *").attr("data-dark", "false");

    $(".header .etc ul li").click(function(){
        if($("html *").attr("data-dark") == "false"){
            $("html *").attr("data-dark", "true");
        }else{
                $("html *").attr("data-dark", "false");
        }
        $(".header .etc ul li i").eq(0).toggleClass("fa-moon fa-sun")
        
    })


})