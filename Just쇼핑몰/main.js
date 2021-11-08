$(function(){
    /* Menu script Start*/
    $('.subWrap').hide();
    $('.mainMenu>li>a, .subWrap').mouseover(function(){
        $('.subWrap').stop().slideDown();
    }).mouseout(function(){
        $('.subWrap').stop().slideUp();
    })
    /* Menu Script End */

    /* Image Slide Script Start*/
    setInterval(function(){
        $('.imgWrap').delay(2500);
        $('.imgWrap').animate({'marginTop':'-300px'});
        $('.imgWrap').delay(2500);
        $('.imgWrap').animate({'marginTop':'-600px'});
        $('.imgWrap').delay(2500);
        $('.imgWrap').animate({'marginTop':'0px'});    
    })
    /*Image Slide Script End*/

    /*Content Script Start*/
    var content = $('.tabCont>div');
    var menu = $('.tabMenu>ul>li');

    content.hide().eq(0).show();
    menu.click(function(){
        menu.removeClass('active');
        $(this).addClass('active');

        var index = $(this).index();
        content.hide().eq(index).show();
    })
    /*Content Script End*/
    
    /*Modal Script Start*/
    $('#modal').hide();
    $('.cont1>ul>li').eq(0).click(function(){
        $('#modal').fadeIn();
    })
    $('.modalCont>button').click(function(){
        $('#modal').fadeOut();
    })
});