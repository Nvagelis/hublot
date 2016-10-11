$(document).ready(function (){
    var $grid = $('.grid-box-bg');
    var $social = $('.type-social');
    
    var colors = [
                'rgba(222, 43, 43, 0.9)',        //red
                'rgba(105, 112, 81, 0.9)',       //green olive
                'rgba(20, 105, 169, 0.9)'        //blue
            ];
            
   
    $grid.each(function (){
        var item = $(this);
        var img = item.find('img').attr('src');

        if(typeof img !== 'undefined'){
            item.css({'background-image': 'url( '+ img +' )'});
            item.find('img').hide();
        }
    });
    
    $social.each(function (i){
        var item = $(this);
        if($('.home-page').length){
            item.find('.grid-box-bg').css({'background-color': colors[0]});
        }
        if($('.news-page').length){
            item.find('.grid-box-bg').css({'background-color': colors[colors.length - (i+1)]});
        }
    });
});


