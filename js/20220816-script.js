$("document").ready(function(){
console.log("hello world")
/*console.log(hello world)*/
console.log("100+100")
console.log(100+100)
console.log(100-100)
console.log(100/100)
console.log(100*100)
console.log(100%100)
console.log(100+100+"100")


let a = 50;
console.log(a, "a")
console.log(a+100)
let b = 150;
console.log(a+b, "a+b")
a = 100;
console.log(a)
const c = 1000;
console.log(c)



$("p").css("color","orange")
$(".box").css("color","#fff").css("background-color", "#909").css("font-size", "30px")




// const box = $(".box");
/*
let변수명 = 변수값
const변수명 = 변수값
var변수명 = 변수값
변수값은 생략하고 변수명만 선언 가능
let/ var 은 값이 변경이 가능하지만 .const 변경하면 에러

let var 값이 변하기는 하지만, 같은 선상에서는 재 선언 하지않는다.
예) let a =20; 다시 let a = 50 에러발생
예) let a = 50; a = 100정상

const 값이 고정될때 사용하며, 주로 선택자를 변수로 선언할때 사용한다.
변경되지 않는 값이 라면 어디든지 사용가능하며 , 값이 변경하면 안된다.

변수명에는 특수문자를 $ _ 2개만 사용가능하며, 다른 특수문자 사용시 에러발생
한글 사용도 가능은 하나 권장하지않음.
숫자는 사용가능 첫단어에만 사용이 불가능 하다.
예) let a10 = 10; (o) let 10a = 10 (x)
문자열과 데이터 혹은 데이터와 문자열을 연결할때는 + 기호를 사용하여 연결한다.


*/

})



/* 
$ 제이쿼리 함수를 의미
() 선택자를 의미
("document") 문서를 선택자로 선택한다.
.ready 준비가 되었을때
(function(){}) 기능을 추가한다.

문서가 모두 준비가 완료 되었을때 작성한 코드이 기능을 실행

console.log(데이터) / console.log(문자) 어떠한 데이터 혹은 값을 콘솔창을 통해 미리 확인할때 사용
브라우저 f12 > 개발자 도구 > 우측 콘솔메뉴를 통해 확인가능
브라우저 우측마우스 > 검사 > 콘솔메뉴에서 확인 할수 있다.
'' 혹은 "" 사용은 무방하나 동시에 사용할수없다.
예 '''' (x) """"(x) '""'(o) "''"(o)

변수 - 변하는 수 > 어떠한 데이터를 임의로 설정해둔 뒤 사용하거나 변경하거나 삭제 할때 사용
소문자 / 대문자를 구분하기에 작성된 문자가 정확한지 확인 필수!
a / A = 다른값

*/

