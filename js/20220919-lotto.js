// list 라는 변수명에 배열을 추가하고 값은 작성하지않는다. (배열만 추가)

let list = [];

// 로또의 번호는 1번부터 45번까지 되어있으며 반복문을 통해 45번실행하여, 변수명 list에 해당 값을 추가한다.
// 추가할때 필요한 속성은 push 속성을 이용하고, 밀어넣다는 의미로 사용되지만, 실제 데이터가 들어갈때 사용 > .push(data);

for(let i = 1; i < 46; i++){
    list.push(i)
}
// 추출된 번호를 저장하기 위하여 배열을 result 변수명으로 선언한다.
let result = [];

for(let k = 0; k < 6; k++){
    // 반복문을 통해 실제 6개의 데이터를추출하기 위해 반복문을 실행
    // 45개의 번호중 랜덤으로 추출하기 위해 변수를 선언한다.
    
    let index = Math.floor(Math.random() * list.length);
    // 랜덤의 범위는 1~ 45번까지

    let num = list[index]
    // 리스트의 배열 45개 중 해당 인덱스값의 번호를 num에 저장한다.

    // 랜덤으로 추출된 번호는 list에서 45개의 갯수에서 해당번호를 삭제한다.
    list.splice(index,  1);
    // 잘라내기 splice (번호 , 갯수)
    // 해당값을 출력할 결과 배열에 추가한다
    result.push(num)
}
// 정렬 속성(sort)를 활용해서 오름차순 or 내림차순 으로 변경한다
// 오름차순 a - b;
// 내림차순 b - a;
result.sort(function(a,b){
return a - b;
})
console.log(result)
// 최종결과의 데이터를 화면에 출력
document.write("<div class='lotto'>")
for(let k = 0; k < 6; k++){
    document.write("<span class='ball'>"+result[k]+"</span>")
    // 배열의 값이 6개이므로 반복문을 통해 6개의 데이터를 표현
}
// [1~6]넣으면 출력됨

document.write("</div>")

$("document").ready(function(){

    $(".ball").each(function(){
        let num = $(this).text();
        console.log(num)
        if(num >= 1 && num <= 10){
            $(this).css("background-color", "#fbc400")
        }else if(num >= 11 && num <= 20){
            $(this).css("background-color", "#69c8f2")
        }else if(num >= 21 && num <= 30){
            $(this).css("background-color", "#ff7272")
        }else if(num >= 41 && num <= 45){
            $(this).css("background-color", "#b0d840")
        }
        
    })
})