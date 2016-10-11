$(document).ready(function (){

    var $slides = $('.btq-slider').find('li');
    var $view = $('.btq-view');
    var current = 0;

    var $prev = $('.btq-container').find('.prev');
    var $next = $('.btq-container').find('.next');

    $slides.each(function (i){
        $(this).css({transform: 'translate(' + i*100 + '%, 0%)'});
    });
    function move(pos){
      
        $view.animate({  view: (100*pos) }, {
            step: function(now) {
                $(this).css('transform','translate(-' + now + '%, 0%)');  
            },
            duration:'slow'
        },'linear');
    }
    $next.on('click', function (e){
        e.preventDefault();
        if(current >= $slides.length-1 || $view.is(':animated')){return false;}
        current ++;
        move(current);
    });
    $prev.on('click', function (e){
        e.preventDefault();
        if(current <= 0 || $view.is(':animated')){return  false;}
        current --;
        move(current);
    }); 

});
