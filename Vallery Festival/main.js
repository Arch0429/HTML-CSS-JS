var imageIndex = ['0', '-800px', '-1600px'];
var i = 0;

$(function(){
    $('.subMenu').hide();
    $('.mainMenu>li').mouseover(function(){
        $(this).find('.subMenu').stop().slideDown();
    }).mouseout(function(){
        $('.subMenu').stop().slideUp();
    });

    setInterval(function(){        
        $('.imgSlide').animate({'marginLeft':imageIndex[i]})
        i++;
        if(i>=imageIndex.length){
            i=0;
        }
    },2500);

    $('#modal').hide();
    $('.notice>ul>li:last-child>ul>li:first-child').click(function(){
        $('#modal').fadeIn();
    });
    $('.modalB button').click(function(){
        $('#modal').fadeOut();
    });
});