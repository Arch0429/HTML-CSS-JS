 

$(function(){
    /*Menu Scritp Start*/
    $('.subBack').hide();
    $('.mainMenu a,.subBack').mouseover(function(){
        $('.subBack').stop().fadeIn();
    }).mouseout(function(){
        $('.subBack').stop().fadeOut();
    });
    /*Menu Script End*/
    
    // /*ImageSlide Scirpt Start*/
    // var i = 1;
    // setInterval(function(){
    //     $(".imgWrap").animate({'marginLeft':-1200*i})
    //     i++;
    //     if(i==3){
    //         i=0;
    //     }
    // },2500);
    // /*ImageSlide Scirpt End*/

    /* Modal Script Start*/
    $("#modal").hide();
    $(".n_second>ul>li:first-child").click(function(){
        $("#modal").fadeIn();
    });
    $(".m_btn>input").click(function(){
        $("#modal").fadeOut();
    })

    setInterval(function(){
        $(".imgWrap").delay(2500);
        $(".imgWrap").animate({'marginLeft':'-1200'});
        $(".imgWrap").delay(2500);
        $(".imgWrap").animate({'marginLeft':'-2400'});
        $(".imgWrap").delay(2500);
        $(".imgWrap").animate({'marginLeft':'0'});
    })
});