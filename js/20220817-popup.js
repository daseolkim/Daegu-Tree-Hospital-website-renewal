$("document").ready(function () {

$(".popup .popup-btn a").click(function (e) { 
    e.preventDefault();
    $(".popup .popup-btn a").toggleClass("on");
    $(".popup .popup-btn a i").toggleClass("fa-solid fa-angle-up fa-solid fa-angle-down");
    $(".popup .popup-content").slideToggle()

    $("popup .popup-btn a")



});




})