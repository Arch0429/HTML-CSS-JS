var imgIndex = ['-300px','-600px','0px']
var i = 0;
$(function(){
    $('.subMenu').hide();
    $('.mainMenu>li').mouseover(function(){
        $(this).find('.subMenu').stop().slideDown();
    }).mouseout(function(){
        $('.subMenu').stop().slideUp();
    });

    setInterval(function(){
        $('.imgWrap').animate({'marginTop':imgIndex[i]});
        i++;
        if(i>=imgIndex.length){
            i=0;
        }
    },2500);

    $('#modal').hide();
    $('.notice>ul>li:last-child>ul>li:first-child').click(function(){
        $('#modal').fadeIn();
    });
    $('.modalBtn>button').click(function(){
        $('#modal').fadeOut();
    })
});