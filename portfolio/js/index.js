$("document").ready(function(){
    $("#wave-1").wavify({
        height: 800,
        bones: 4,
        amplitude: 40,
        color: "#9a48fa",
        speed: .15
    })
    $("#wave-2").wavify({
        height: 700,
        bones: 3,
        amplitude: 40,
        color: "#140a42",
        speed: .25
    })
    let typed = new Typed("#typed1",{
        stringsElement : "#typed",
        typeSpeed: 100
    })
})