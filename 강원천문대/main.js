var i = 0;
var imageIndex = ['url(./img/img2.PNG)', 'url(./img/img3.PNG)', 'url(./img/img1.PNG)']

$(function(){
    /* Menu Script Start */
    $('.subMenu').hide();
    $('.mainMenu>li').mouseover(function(){
        $(this).find('.subMenu').stop().slideDown();
    }).mouseout(function(){
        $('.subMenu').stop().slideUp();
    });
    /* Menu Script End */

    /* Image Script Start */
    setInterval(function(){
            $('main').css({'backgroundImage':imageIndex[i]});
            i++;
            if(i>2){
                i=0;
            }
    },2500);
    /* Image Script End */

    /* TabMenu Script Start */
    var Content = $('.tabCont>div');
    var Menu = $('.tabMenu li');

    Content.hide().eq(0).show();
    Menu.click(function(){
        Menu.removeClass('active');
        $(this).addClass('active');

        var index = $(this).index();
        Content.hide().eq(index).show();
    });
    /* TabMenu Script End */

    /* Modal Script Start */
    var modal = $('.tabCont1>ul>li');

    $('#modal').hide();
    modal.eq(0).click(function(){
        $('#modal').fadeIn();
    });
    $('#modal button').click(function(){
        $('#modal').fadeOut();
    });
    /* Modal Scirpt End */

});