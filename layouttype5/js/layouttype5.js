(function ($) {
    'use strict';

    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $head = $('head'),
        $screen = $.screen,
        $inArray = $.inArray;
    $(function () {

        //여기서부터 코드 작성해주세요
        var $Sian1Swiper = new Swiper('.sian1 .sian1_wrap .swiper_inner .swiper-container', {
            freeMode : false,  //터치 밀었을 떄 하나씩 말고 휙 넘어가는 여부
            slidesPerView : 'auto',  //slick 에서 사용하는 variableWidth 처럼 사용하기 위함, width 지정할 것
            resistance : false,
            spaceBetween : 0,  //오른쪽 마진값(px)
            touchRatio : true,  //드래그 사용여부
            speed : 600,
            loop : true,  //무한루프
            navigation : {
                prevEl : '.sian1 .sian1_wrap .swiper_inner .swiper_btn_box .swiper_btn.prev',
                nextEl : '.sian1 .sian1_wrap .swiper_inner .swiper_btn_box .swiper_btn.next',
            },
            pagination : {
                el : '.sian1 .sian1_wrap .swiper_inner .swiper_btn_box .number_box',
                type : 'custom',
                renderCustom: function (swiper, current, total) {
                    function ZeroOver(number) {
                        return (number < 10) ? '0' + number.toString() : number.toString();
                    }
                    $('.sian1 .sian1_wrap .swiper_inner .swiper_btn_box .number_box .current').text(ZeroOver(current));//current 앞에 0 필요시
                    $('.sian1 .sian1_wrap .swiper_inner .swiper_btn_box .number_box .total').text(ZeroOver(total));  //total 앞에 0 필요시
                    //$('.sian1 .sian1_wrap .swiper_inner .swiper_btn_box .number_box .current').text(current);  //0 필요없을 때
                    //$('.sian1 .sian1_wrap .swiper_inner .swiper_btn_box .number_box .total').text((total));  //0 필요없을 때
                }
            },
            breakpoints : {}
        });

        $window.on('screen:tablet screen:phone', function (event) {

        });
    });
})(jQuery);