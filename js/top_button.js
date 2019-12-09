$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#top-button').fadeIn();
        }else{
            $('#top-button').fadeOut();
        }
    });

    $("#top-button").click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
    });
}); 