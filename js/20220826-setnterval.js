$("document").ready(function(){
// setTimeout(function(){이벤트코드},지연시간)
// setInterval(function(){이벤트코드},반복시간)
// setTimeout - 시간 지연 이벤트이며, 해당 지연시간동안 실행되지 않고 해당 시간이 지난 뒤 "딱 한번만 실행"
// setInterval - 시간 반복이벤트이며, 반복시간두 해당이벤트를 계속해서 반복하며, 멈추는 코드를 작성하지 않거나 / 브라우저를 종료하지 않는 한 계속해서 동작

// setTimeout(function(){
//     $(".box").fadeOut()
// },3000)
// setTimeout(function(){
//     $(".box").fadeIn()
// },6000)
let count = 0;
let color = [
    "#909" , "#d9a" , "7d0" , "#a64" 
]

setInterval(function(){
    // alert(무한으로 반복됨)
    count++

    if( count > $(".content ul li").length-1){
        count = 0
    }
    console.log(count,$(".content ul li").length)
    $(".content ul li").hide().eq(count).fadeIn()
    $(".item").css("background-color", color[count])
},2000)





})

