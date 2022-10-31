$("document").ready(function (){
    
    //for(변수명; 조건문; 증감 or 가감){반복코드}
    //배열.map((아이템,인덱스) =>{이벤트 반복코드}) > 배열에서만 사용가능
    let work_list = [ 
        {
            id : 1,
            img : "images/a-1.jpg",
            title : "XX 포스터 디자인(제목구간) 1",
            date : "22.09.08 ~ 22.09.10 (2일)",
            desc : "어떠한 기획을 통해 어떻게 해석하여 어떻게 표현하였습니다.(설명구간) 1" 
        },
        {
            id : 2,
            img : "images/a-2.jpg",
            title : "XX 포스터 디자인(제목구간) 2",
            date : "22.09.10 ~ 22.09.13 (3일)",
            desc : "어떠한 기획을 통해 어떻게 해석하여 어떻게 표현하였습니다.(설명구간) 2" 
        },
        {
            id : 3,
            img : "images/a-3.jpg",
            title : "XX 포스터 디자인(제목구간) 3",
            date : "22.09.20 ~ 22.09.25 (5일)",
            desc : "어떠한 기획을 통해 어떻게 해석하여 어떻게 표현하였습니다.(설명구간) 3" 
        }
    ]
    // 렝스로 데이터를 받아옴
    
    console.log(work_list[2].img, work_list.length)
    // for(let int = 0; int < work_list.length; int++){
    //     // console.log(int)
    //     let html = "";
    //     html += '<div class="work-content">'
    //         html += '<div class="work-img">'
    //             html += '<a href="#">'
    //                 html += '<img src='+work_list[int].img+ ' alt="500x500">'
    //             html += '</a>'
    //         html += '</div>'
    //         html += '<div class="work-desc">'
    //                 html += '<p>'+work_list[int].title+'</p>'
    //         html += '</div>'
    //     html += '</div>'            
    //     $(".content .work-wrap").append(html)
//         }

    work_list.map((e)=>{
        console.log(e.img)
        let html = "";
        html += '<div class="work-content swiper-slide">'
            html += '<div class="work-img">'
                html += '<a href="#">'
                    html += '<img src='+e.img+ ' alt="500x500">'
                html += '</a>'
            html += '</div>'
            html += '<div class="work-desc">'
                    html += '<p>'+e.title+'</p>'
                    html += `<p>작업기간: ${e.date}</p>`
                    html += '<p>'+e.desc+'</p>'
            html += '</div>'
        html += '</div>'            
        $(".content .work-wrap").append(html)

    })

    let swiper = new Swiper(".swiper.content",{
    loop: true
})









});