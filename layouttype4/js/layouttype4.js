window.onload = function(){

    //
    var Wrapper = document.getElementById('wrapper'),
        LnbBtn = document.querySelector('.lnb_btn');
    LnbBtn.addEventListener("click", function () {
        if (Wrapper.classList.contains('lnb_open')) {
            Wrapper.classList.remove('lnb_open');
            LnbBtn.setAttribute('title', 'menu open')
        } else {
            Wrapper.classList.add('lnb_open');
            LnbBtn.setAttribute('title', 'menu close')
        }
    });

    //
    var Container = document.getElementById('container'),
        ContainerWidth = Container.scrollWidth,
        ContainerWidthPer = (ContainerWidth / ContainerWidth) * 100,
        SectionWrap = document.getElementsByClassName('section_wrap'),
        Section = document.getElementsByClassName('section'),
        SectionArea = ContainerWidthPer / Section.length;
    console.log(Section.length);
    console.log(SectionArea);

    //
    function ContainerMove(event){
        Container.style.transform = "translateX(-"+event+"%)";
    }
    function SectionScale(event, index){
        SectionWrap[index].style.transform = "scale("+event+")";
    }

    //
    var move, count = 0;
    window.onmousewheel = function (e) {
        if(e.wheelDelta === -120){
            count++;
            move = (count / ContainerWidthPer) * ContainerWidthPer;
            console.log(move);
            if(move > ContainerWidthPer){
                ContainerMove(ContainerWidthPer);
                move = ContainerWidthPer;
                count = ContainerWidthPer;
            }
            if(move <= ContainerWidthPer){
                ContainerMove(move);
                var sectionnumber = count / SectionArea;
                console.log(sectionnumber);
                if(sectionnumber <= 1){
                    SectionScale((1 - (count/SectionArea)), 0);
                }
                if(sectionnumber > 1 && sectionnumber <= 2 ){
                    SectionScale((2 - sectionnumber), 1);
                }
                if(sectionnumber > 2 && sectionnumber <= 3 ){
                    SectionScale((3 - sectionnumber), 2);
                }
                if(sectionnumber > 3 && sectionnumber <= 4 ){
                    SectionScale((4 - sectionnumber), 3);
                }
            }
        }
        else{
            count--;
            move = (count / ContainerWidthPer) * ContainerWidthPer;
            if(move < 0){
                ContainerMove(0);
                move = 0;
                count = 0;
            }
            if(move >= 0){
                ContainerMove(move);
                var sectionnumber = count / SectionArea;
                console.log(sectionnumber);
                if(sectionnumber < 1 && sectionnumber >= 0){
                    SectionScale((1 - (count/SectionArea)), 0);
                }
                if(sectionnumber < 2 && sectionnumber >= 1){
                    SectionScale((2 - (count/SectionArea)), 1);
                }
                if(sectionnumber < 3 && sectionnumber >= 2){
                    SectionScale((3 - (count/SectionArea)), 2);
                }
                if(sectionnumber < 4 && sectionnumber >= 3){
                    SectionScale((4 - (count/SectionArea)), 3);
                }
            }
        }
    }
}   //window.onload end