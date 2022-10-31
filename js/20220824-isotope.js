$("document").ready(function(){

    $(".container .menu ul li").eq(0).addClass("on")
    
    $(".container .item-wrap").isotope({
        itemSelector : ".item"
    })

    $(".container .menu ul li").click(function(){
        let selector = $(this).attr("data-filter");
        let i = $(this).index();
        $(".container .menu ul li").removeClass("on").eq(i).addClass("on")
    $(".container .item-wrap").isotope({
        filter : selector
    })
})

})