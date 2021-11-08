var i = 1;


$(function(){
    

    /*Menu Script Start*/
    $('.subWrap').hide();
    $('.mainMenu a, .subWrap').mouseover(function(){
        $('.subWrap').stop().slideDown();
    }).mouseout(function(){
        $('.subWrap').stop().slideUp();
    });
    /*Menu Script End*/

    /*Image Slide Script Start*/
    setInterval(function(){
        $('.imgWrap').delay(2500);
        $('.imgWrap').animate({'marginLeft':'-1200px'});
        $('.imgWrap').delay(2500);
        $('.imgWrap').animate({'marginLeft':'-2400px'});
        $('.imgWrap').delay(2500);
        $('.imgWrap').animate({'marginLeft':'0px'});
    });
    /*Image Slide Script End*/

    /*TabMenu Script Start*/
    var content = $('.tabCont>div');
    var menu = $('.tabMenu li');

    content.hide().eq(0).show();
    menu.click(function(){
        menu.removeClass('active');
        $(this).addClass('active');

        var index = $(this).index();
        content.hide().eq(index).show();
    })
    /*TabMenu Script End*/
    
    /*Modal Script Start*/
    $('#modal').hide();
    $('.cont1>ul>li:first-child').click(function(){
        $('#modal').fadeIn();
    });
    $('.modalBtn>button').click(function(){
        $('#modal').fadeOut();
    });
    /*Modal Script End*/
});