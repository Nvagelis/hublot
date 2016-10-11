$(document).ready(function (){
    
    var $win = $(window);
    var $num = $('.social-number span');
    
    $win.scroll(function () {
        var winHeight = $win.height(),
            scrolltop = $win.scrollTop(),
            elems = [];
        
        $.each($.cache, function () {
            if (this.events && this.events.inview) {
                elems.push(this.handle.elem);
            }
        });

        if (elems.length) {
            $(elems).each(function () {
                var $el = $(this),
                    top = $el.offset().top,
                    height = $el.height();

                if (scrolltop > (top + height) || scrolltop + winHeight < top) {
                    $el.trigger('inview', [ false ]);                        
                } else if (scrolltop < (top + height)) {
                    $el.trigger('inview', [ true ]);
                }
            });
        }
    });
    
    $num.bind('inview', function(event, visible) {
        if (visible && !$(this).hasClass('animated')) {
            var item = $(this);
            item.addClass('animated');
            item.each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });
    

    
});


