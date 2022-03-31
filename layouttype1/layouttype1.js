(function($) {
    'use strict';

    var $Html = $('html');

    $(function() {

        //nav nav_itme hover
        var $LogoBox = $('.logo_box'),
            $NavList = $('.nav_list'),
            $NavItem = $NavList.find('.nav_item');
        $LogoBox.on('mouseenter', function(){
            $Html.addClass('menu_open');
        });
        $LogoBox.on('mouseleave', function(){
            $Html.removeClass('menu_open');
        });
        $NavItem.on('mouseenter', function(){
            $NavList.css('animation-play-state','paused');
        });
        $NavItem.on('mouseleave', function(){
            $NavList.css('animation-play-state','running');
        });


        var $IsSectionTop = $NavItem.is('nav_item.top'),
            $IsSectionRight = $NavItem.is('nav_item.right'),
            $IsSectionBottom = $NavItem.is('nav_item.bottom'),
            $IsSectionLeft = $NavItem.is('nav_item.left');


    });
})(jQuery);