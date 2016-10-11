$(document).ready(function (){
    var $slides = $('.craft-slide');
    var $view = $('.craft-slider-wrap');
    var current = 0;
    var $contList = $('.slider-nav');
    var $controls = $contList.find('li');

    function move(pos){
        $controls.removeClass('active').eq(pos).addClass('active');
        $view.animate({  view: (100*pos) }, {
            step: function(now) {
                $(this).css('transform','translate(0%, -' + now + '%)');  
            },
            duration:'slow'
        },'linear');
    }

    function nextSlide(){
        if(current >= $slides.length-1 || $view.is(':animated')){return false;}
        current ++;
        move(current);
    }
    
    function prevSlide(){
        if(current <= 0 || $view.is(':animated')){return  false;}
        current --;
        move(current);
    }

    $controls.on('click',function (e){
        e.preventDefault();
        if($view.is(':animated')){return  false;}
        current = $(this).index();
        move(current);
    });
  
    function scroll(delta){
        if(delta < 0){
            if($view.is(':animated')){return false;}
                nextSlide();
        }else{
            if($view.is(':animated')){return false;}
                prevSlide();
        }
    }
    if($slides.length){
        $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e) {
            e.preventDefault();
            var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
            scroll(delta);
        });
    }
});


