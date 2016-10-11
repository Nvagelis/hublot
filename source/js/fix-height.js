$(window).load(function (){
    var $win = $(window);
    var $header = $('.min-height');
    var $videoH = $('.craft-slider-wrap');
    
    var $boutiques = $('.boutiques-page').find('.header-container');
    var $brqSlider = $('.btq-container');
    
    function sliderHeight(){
        var hh = $brqSlider.find('img').height();
        $brqSlider.height(hh);
    }
    
    function headerDimension(){
        var hh = $win.height();
        
        if($win.height() > 750){
            $header.height(750);
        }else{
            $header.height(hh);
        }
        if($win.width() > 1024){
            $videoH.height(hh-60);
        }else{
            $videoH.height(hh-40);
        }
        $boutiques.height('');
    }
    
    headerDimension();
    sliderHeight();
    $win.resize(headerDimension);
    $win.resize(sliderHeight);

});
