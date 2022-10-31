$("document").ready(function(){
    
    $(".content img").click(function() { 
        let i = $(this).index();

        // console.log(content_img[i])
        $(".window").slideDown();
        // $(".window").show();
        // $(".window").fadein();
        $(".window-content").slideDown()
        $(".window-content img").attr("src", content_img[i])

        
})

        // 배열 > 하나의 변수 안에 여러 개의 데이터가 집합된값
let content_img = [
    "https://via.placeholder.com/1200x5000",
    "https://via.placeholder.com/1200x5000/dae",
    "https://via.placeholder.com/1200x5000/097",
    "https://via.placeholder.com/1200x5000/70c"
]
// 배열 사용법 > 변수명 [번호]
// 예를 들어 3번을 사용하고 싶다면 content_img[3]
// 0번을 사용하고 싶다면 content_img[0]



})