(function($) {
    'use strict';

    $(function() {

        //nav nav_itme hover
        var $NavList = $('.nav_list'),
            $NavItem = $NavList.find('.nav_item');
        $NavItem.on('mouseenter', function(){
            $NavList.css('animation-play-state','paused');

        });
        $NavItem.on('mouseleave', function(){
            $NavList.css('animation-play-state','running');
        });



    });
})(jQuery);