/*
(function($){
    'use strict';

    $(function(){

        var $window = $(window);

        $window.on('scroll', function(){
            var ScrollTop = $window.scrollTop();
            var $Body = $('body'),
                $Header = $('#header'),
                $Container = $('#container'),
                BodyOffset = $Body.offset(),
                BodyTop = BodyOffset.top,
                ContainerOffset = $Container.offset(),
                ContainerTop = ContainerOffset.top,
                ContainerHeight = ContainerTop + $Container.innerHeight();


            if(ScrollTop <= 300){
                console.log(ScrollTop);
                $Header.css({'height':''+ScrollTop+'px'});
            }

            if($Header.innerHeight() == 300 ){
                console.log('300');
            }
        });

    });
})(jQuery);
*/

$(document).ready(function () {
    /*
    const circle = document.querySelector('.circle');
    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle.style.width = '64px';
        circle.style.height = '64px';
        circle.style.top = mouseY + 'px';
        circle.style.left = mouseX + 'px';
    });
    document.addEventListener("mouseout", (e) => {
        circle.style.width = '0px';
        circle.style.height = '0px';
    });
    */

    var Wrapper = document.getElementById('wrapper'),
        LnbBtn = document.querySelector('.lnb_btn');
    LnbBtn.addEventListener("click", function () {
        //if lnb_open classname have
        if (Wrapper.classList.contains('lnb_open')) {
            Wrapper.classList.remove('lnb_open');
            LnbBtn.setAttribute('title', 'menu open')
        } else {
            Wrapper.classList.add('lnb_open');
            LnbBtn.setAttribute('title', 'menu close')
        }
    });

    var Container = document.getElementById('container'),
        ContainerWidth = Container.scrollWidth,
        ContainerWidthPer = (ContainerWidth / ContainerWidth) * 100,
        Section = document.getElementsByTagName('section');

    console.log(ContainerWidthPer);

    function ContainerMove(event){
        Container.style.transform = "translateX(-"+event+"%)";
    }

    var move, count = 0;

    window.onmousewheel = function (e) {
        if(e.wheelDelta === -120){
            count++;
            move = (count/80)*100;

            if(move >= ContainerWidthPer){
                ContainerMove(100);
                move = 100;
                count = 80;
            }
            if(move < ContainerWidthPer){
                ContainerMove(move);
            }
        }
        else{
            count--;
            move = (count/80)*100;

            if(move < 0){
                ContainerMove(0);
                move=0;
                count=0;
            }

            ContainerMove(move);
        }
    }
});