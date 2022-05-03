const consolestyle = 'color:#FF0000;';
console.log('gunami', consolestyle);

window.onload = function(){

    //gunami
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
        Section = document.getElementsByClassName('section'),
        SectionIndex = Section.length,
        SectionLength = ContainerWidthPer / SectionIndex,
        SectionWrap = document.getElementsByClassName('section_wrap');

    console.log(SectionIndex);

    //
    function ContainerMove(event){
        Container.style.transform = "translateX(-"+event+"%)";
    }
    function SectionScale(event, index){
        SectionWrap[index].style.transform = "scale("+event+")";
    }

    //
    var gunami = 1;
    var move, count = 0;

    window.onmousewheel = function (e) {
        if(e.wheelDelta === -120){
            count++;
            move = (count / ContainerWidthPer) * ContainerWidthPer;
            if(move <= ContainerWidthPer){
                ContainerMove(move);
                if(gunami <= SectionIndex){
                    SectionScale((gunami - (count / SectionLength)), gunami-1);
                    if(count % SectionLength == 0){
                        gunami++;
                    }
                }
            }
            else{
                ContainerMove(ContainerWidthPer);
                move = ContainerWidthPer;
                count = ContainerWidthPer;
                gunami = SectionIndex-1;
            }
        }
        else{
            count--;
            move = (count / ContainerWidthPer) * ContainerWidthPer;
            if(move >= 0){
                ContainerMove(move);
                if(gunami <= SectionIndex){
                    SectionScale((gunami - (count / SectionLength)), gunami-1);

                }
            }
            else{
                ContainerMove(0);
                move = 0;
                count = 0;
                gunami = 1;
            }
        }
        console.log('move:',move);
        console.log('count:',count);
        console.log('gunami:',gunami);
        console.log('SectionIndex:',SectionIndex);
        console.log('SectionLength:',SectionLength);
        console.log('');
    }
}   //window.onload end