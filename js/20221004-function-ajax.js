$("document").ready(function(){
    // console.log("1" == 1)
    // console.log("1" === 1)
    function Nav(){
        $.ajax({
            url : "nav.json",
            success : function(e){
                console.log(e[2].link)
                e.map((item,imdex) =>{
                    // 아이템에e에 대한데이터가 들어감
                    // console.log(item.nav)
                    $(".nav ul").append(`<li><a href="${item.link}">${item.nav}</a></li>`)
                })
            },
            error: function(error){
                console.log(error)
            }
        })
    }
    Nav();
    let Num = 1;
    //삼항 연산자 / (조건문 ? 참 : 거짓);
    function AlbumData(){
        $.ajax({
            url : "https://jsonplaceholder.typicode.com/photos",
            success : function(e){
                console.log(e)
                e.map((item,index) =>{
                    return (Num === item.albumId ? $(".content .content-wrap").append
                    (`<div class="content-list">
                    <img src=${item.url} alt="${item.title}" />
                    <p>${item.title}</p>
                    </div>`) : null)
                })
            },
            error : function(error){
                console.log(error)
            }
        })
    }
    AlbumData()
    $(".page a").click(function(e){
        e.preventDefault()
        let i = $(this).index();
        // alert(i)
        if(i == 0){
            Num--;
            if(Num < 1){
                alert("더 이상 데이터가 없습니다");
                Num = 1;
            }
            $(".content .content-wrap .content-list").remove()
            AlbumData()
        }else{
            Num++;
            if(Num > 100){
                alert("더 이상 데이터가 없습니다");
                Num = 100;
        }
        $(".content .content-wrap .content-list").remove()
        AlbumData()
        }
    })
    // 무한스크롤 공식
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos == $(document).height() - $(window).height()){
            console.log("끝")
            Num++;
            if(Num > 100){
                alert("더 이상 데이터가 없습니다");
                Num = 100;
        }
        $(".content .content-wrap p")
        AlbumData()
        }
    })
})
