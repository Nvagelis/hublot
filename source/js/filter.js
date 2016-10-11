$(document).ready(function (){
    var $items = $('.grid-box-show');
    var $links = $('.filter-list a');
    
    $links.on('click', function (e){
        e.preventDefault();
        var check = $(this);
        if(check.hasClass('all-filters')){
            fadeElems("*", check);
        }
        if(check.hasClass('football')){
            fadeElems("[data-filter = 'football']", check);
        }
        if(check.hasClass('motosport')){
            fadeElems("[data-filter = 'motosport']", check);
        }
        if(check.hasClass('basketball')){
            fadeElems("[data-filter = 'basketball']", check);
        }
        changeCls(check);
    });
    
    function changeCls($el){
        $links.removeClass('active');
        $el.addClass('active');
    }
    function fadeElems(filter, $el){
        if($el.hasClass('active')){return false;}
        $items.hide();
        $items.filter(filter).fadeIn();
    }

});