var i=0;
var imgIndex = ['-300px', '-600px', '0px'];

$(function(){
    /*Menu Script Start*/
    $('.subWrap').hide();
    $('.mainMenu a,.subWrap').mouseover(function(){
        $('.subWrap').stop().slideDown();
    }).mouseout(function(){
        $('.subWrap').stop().slideUp();
    });
    /*Menu Script End*/

    /*Image Slide Script Start*/
    setInterval(function(){
        $('.imgWrap').animate({'marginTop':imgIndex[i]});
        i++;
        if(i>=imgIndex.length){
            i=0;
        }
    },2500);
    /*Image Slide Script End*/

    /*Modal Script Start*/
    $('#modal').hide();
    $('.notice>ul>li:last-child>ul>li:first-child').click(function(){
        $('#modal').fadeIn();
    });
    $('.modalBtn>button').click(function(){
        $('#modal').fadeOut();
    });
    /*Modal Script End*/
});