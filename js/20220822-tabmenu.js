$("document").ready(function(){
    // 화면 시작시 첫번째 리스트 아이템 클래스를 추가 한다 
    $("tabmenu ul li").eq(0).addClass("on")

    // 화면 처음 시작시 첫번째 컨텐츠를 화면에서 출력한다.
    $(".tab-wrap .tab-content").eq(0).show();

    // 탭리스트를 클릭하는 이벤트를 생성
    $(".tabmenu ul li").click(function(e){
        e.preventDefault();
    // 현재 클릭한 인덱스 값을 변수에 저장한다
    let i = $(this).index()

    // 탭리스트 클릭시 리스트 아이템의 클래스를 삭제하고 선택한 요소에 클래스를 추가한다.
    $(".tabmenu ul li").removeClass("on").eq(i).addClass("on")

    // 탭리스트 클릭시 탭 컨텐츠를 화면에서 모두 지우고 선택한 요소를 화면에 출력한다.
    $(".tabmenu .tab-wrap .tab-content").hide().eq(i).show()
})

    //     $(".tabmenu").click(function(){
    //     $(".tab-content").show()
    // })
    
    // let i = $(this).index()
    // $(".tabmenu ul li").removeClass("on").eq(0).addClass("on")
    // $(".tab-content").removeClass("on").eq(i).addClass("on")
    // $(".tab-content").hide().eq(0).show()
    // 내가한코드




});
