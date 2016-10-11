$(window).load(function (){
    
    var $win = $(window);
    var $big = $('.grid-box-big');
    var $small = $('.grid-box-small');
    var $medium = $('.grid-box-medium');
    var $mediumWide = $('.grid-box-medium-wide');
    var $mediumHeight = $('.grid-box-medium-height');
    var $smallShow = $('.grid-box-show');
    var $box8 = $('.box-fix-3');
    var $box12 = $('.box-fix-6');

    function fixGrid(){
        var ww = $win.width();
        if($small.length){
            var smallWidth = $small[0].getBoundingClientRect().width;
            $small.height(smallWidth);
            $mediumWide.height(smallWidth);

            if (ww > 768){
                $box8.css({'margin-top': '-' + smallWidth + 'px'});
                $box12.css({'margin-top': '-' + smallWidth + 'px'});
            } else{
                $box8.css({'margin-top': ''});
                $box12.css({'margin-top': ''});
            }
        }
        if($big.length){
            var bigWidth = $big[0].getBoundingClientRect().width;
            $big.height(bigWidth);
            $mediumHeight.height(bigWidth);
        }
        if($medium.length){
            var mediumWidth = $medium[0].getBoundingClientRect().width;
            $medium.height(mediumWidth);
        }
        if($smallShow.length){
            var showWidth = $smallShow[0].getBoundingClientRect().width;
            $smallShow.height(showWidth);
        }
    }

    fixGrid();
    $win.resize(fixGrid);
});