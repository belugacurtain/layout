(function($) {
    'use strict';

    var $Document = $(document);

    $(function() {
        var $Body = $('body'),
            $Wrapper = $('#wrapper'),
            WrapperHeight = $Wrapper.innerHeight(),
            $Header = $('#header'),
            $Foooter = $('#footer');

        //header, footer open function

        $('.header_open_btn').on('click', function(){
            $Body.addClass('menu_open');
        });
    });
})(jQuery);