    var i = 0;

    $(function(){
        $('.subMenu').hide();
        $('.mainMenu>li').mouseover(function(){
            $(this).find('.subMenu').stop().slideDown();
            // mainMenu의 li에 마우스를 올리면
            // 자기 자신의 자식중 subMenu를 찾아서 SlideDown 한다.
        }).mouseout(function(){
            $('.subMenu').stop().slideUp();
            // 마우스를 때면 모든 subMenu 를 SlideUp 한다.
        });

        $('.subMenu>li').mouseover(function(){
            $(this).parent().parent().css({"background":"rgb(106, 106, 207)"});
            // subMenu의 li에 마우스를 올리면
            // 자기 부모의 css 배경속성을 바꾼다.
        }).mouseout(function(){
            $(this).parent().parent().css({"background":"rgb(71, 71, 139)"})
            // 마우스를 때면 자기 부모의 속성을 원래대로 돌린다.
        })

        var img = $('.imgWrap').children();

        img.hide();
        img.eq(0).show();
        // .imgWrap 에서 첫번째("eq(0)")만 보여준다.

        setInterval(function(){
            i++;
            if(i==1){
                img.eq(0).fadeOut();
                img.eq(1).fadeIn();
                // i가 1일때, 첫번째 사진을 FadeOut 하고
                // 두번째 사진을 FadeIn 한다.
            }
            else if(i==2){
                img.eq(1).fadeOut();
                img.eq(2).fadeIn();
                // i가 2일때, 두번째 사진을 FadeOut 하고
                // 마지막 사진을 FadeIn 한다.
            }
            else if(i==3){
                img.eq(2).fadeOut();
                img.eq(0).fadeIn();
                i=0;
                // i가 3일때, 마지막 사진을 FadeOut 하고
                // 첫번째 사진을 FadeIn 하고 i를 0으로 초기화 시킨다.
            }
        },3000)

        $('.tabMenu>ul>li').click(function(){
            $('.tabMenu>ul>li').removeClass('active');
            $(this).addClass('active');
            // tabMenu 의 li 를 클릭하면 모든 li의 active 클래스를 제거하고
            // 클릭한 li 에만 active 클래스를 준다.
        });

        $('.tabCont').children().eq(1).hide();
        // tabCont 의 두번째 내용을 숨긴다

        $('.tabMenu>ul>li:first-child').click(function(){
            $('.tabCont').children().hide()
            $('.tabCont').children().eq(0).show();
            // tabMenu 의 첫번째 li를 클릭하면
            // tabCont 의 자식 요소를 전부 숨기고
            // 첫번째 자식만 보여준다
        })

        $('.tabMenu>ul>li:last-child').click(function(){
            $('.tabCont').children().hide()
            $('.tabCont').children().eq(1).show();
            // tabMenu 의 두번째 li를 클릭하면
            // tabCont 의 자식 요소를 전부 숨기고
            // 두번째 자식만 보여준다
        })
        
        $('#modal').hide();
        // 모달창을 숨겨준다.
        $('.notice>ul>li:first-child').click(function(){
            $('#modal').fadeIn();
            // notice 의 첫번째 li 를 클릭하면
            // 모달창을 FadeIn 한다.
        })
        $('.modalBtn>button').click(function(){
            $('#modal').fadeOut();
            // modalBtn 의 버튼( = Close ) 을 클릭하면
            // 모달창을 FadeOut 한다.
        })

    });