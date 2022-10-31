$("document").ready(function(){

/* 
.attr("속성") - 해당 선택자의 속성값을 가져온다.
.attr("속성", "속성값")- 해당 선택자의 속성값을 변경한다.
text(content)-태그 속성을 제외한 컨텐츠를 해당 요소에 출력 - 문자열 작성시 "" 혹은 '' 사용
.html(content)-태그속성을 포함한 컨텐츠를 해당요소에 출력 - 문자열 작성시 ""혹은 ''사용

*/
$("img").click(function(){


    console.log($("img").attr("src"))
    if($("img").attr("src") == "https://via.placeholder.com/120"){
        $("img").attr("src", "https://via.placeholder.com/120/dae")
        $("p").text($("img").attr("src"))
        $("a").attr("href", "https://naver.com")
        // $("input").attr("type", "checkbox")
        $("input").attr("value", "abc")
        
    }else{
        $("img").attr("src", "https://via.placeholder.com/120")
        $("p").text("Lorem ipsum dolor sit amet.")
        $("a").attr("href", "https://naver.com")
        // $("input").attr("type", "checkbox")
        $("input").attr("value", "")
        
        }

    })

})