$(function(){
    /* Menu Script Strat*/
    $('.subWrap').hide();
    $('.mainMenu>li>a, .subWrap').mouseover(function(){
        $('.subWrap').stop().slideDown();
    }).mouseout(function(){
        $('.subWrap').stop().slideUp();
    })
    /* Menu Script End*/

    /* Image Slide Script Start*/
    setInterval(function(){
        $('.imgWrap').delay(2500);
        $('.imgWrap').animate({'marginLeft':'-1200px'});
        $('.imgWrap').delay(2500);
        $('.imgWrap').animate({'marginLeft':'-2400px'});
        $('.imgWrap').delay(2500);
        $('.imgWrap').animate({'marginLeft':'0px'});
    });
    /* Image Slide Script End*/

    /* Modal Script Start*/
    $('#modal').hide();
    $('.cont1>ul>li:last-child>ul>li').eq(0).click(function(){
        $('#modal').fadeIn();
    });
    $('.modalBtn>button').click(function(){
        $('#modal').fadeOut();
    })
});