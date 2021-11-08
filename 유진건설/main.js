var i = 0;
var ImageIndex = ['url(./img/img2.PNG)','url(./img/img3.PNG)','url(./img/img1.PNG)']

$(function(){
    /* Menu Script Start*/
    $('.subWrap').hide();
    $('.mainMenu a, .subWrap').mouseover(function(){
        $('.subWrap').stop().slideDown();
    }).mouseout(function(){
        $('.subWrap').stop().slideUp();
    });
    /* Menu Script End*/

    /*Image Script Start*/
    setInterval(function(){
        $('main').css({
            'backgroundImage':ImageIndex[i]});
            i++;
            if(i==3){
                i=0;
            }
    },2500);
    /*Image Script End*/

    /*Modal Script Start*/
    var modal = $('.notice>ul>li:last-child>ul>li')
    
    $('#modal').hide();
    modal.eq(0).click(function(){
        $('#modal').fadeIn();
    });
    $('#modal>.modalButton>button').click(function(){
        $('#modal').fadeOut();
    })

    
});