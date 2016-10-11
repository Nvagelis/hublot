$(document).ready(function (){
    var $win = $(window);
    var $body = $('body');
    var $header = $('.main-header');
    var $button = $('.burger');
    var $nav = $('.main-navigation');    

    function checkWidth(){
        if($win.width() > 1024){
            $header.removeClass('active');
            $body.css({'overflow': ''});
            $nav.css({'display':'', 'height': '', 'overflow': ''});
        }
    }
    function menuDimension(){
        var hh = $win.height();
        $nav.height(hh - 40);
    }
    
    $button.on('click', function (){
        if($header.hasClass('active')){
            $header.removeClass('active');
            $body.css({'overflow': ''});
            $nav.css({'display':'', 'overflow': '', 'height': ''});
        }else{
            menuDimension();
            $win.resize(menuDimension);
            $header.addClass('active');
            $body.css({'overflow': 'hidden'});
            $nav.css({'display':'block', 'overflow': 'scroll'});
        }
    });
    
    checkWidth();
    $win.resize(checkWidth);

});