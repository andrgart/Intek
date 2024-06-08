const SliderPart = document.querySelector('.how-we-work-cards_inner');

const LeftBtn = document.querySelector('.how-we-work-control-l');
const RightBtn = document.querySelector('.how-we-work-control-r');

let active = 1;
updateBox();
LeftBtn.addEventListener('click', () => {
    if(active > 1)
        active -= 1;

    updateBox();
})

RightBtn.addEventListener('click', () => {
    if(active < 3)
        active += 1;

    updateBox();
})


function updateBox() {
    if(active == 1){
        LeftBtn.classList.add('disabled-slider-btn');
    }
    else{
        LeftBtn.classList.remove('disabled-slider-btn');
    }

    if(active == 2){
        SliderPart.classList.add('slider_part_two');
    }
    else {
        SliderPart.classList.remove('slider_part_two');
    }

    if(active == 3){
        RightBtn.classList.add('disabled-slider-btn');
        SliderPart.classList.add('slider_part_three');
    }
    else {
        RightBtn.classList.remove('disabled-slider-btn');
        SliderPart.classList.remove('slider_part_three');
    }
}