const InfoSliderPart = document.querySelector('.info-section-cards-block_inner');

const InfoLeftBtn = document.querySelector('.info-control-l');
const InfoRightBtn = document.querySelector('.info-control-r');

let info_active = 1;
updateInfoBox();
InfoLeftBtn.addEventListener('click', () => {
    if(active > 1)
        active -= 1;

    updateInfoBox();
})

InfoRightBtn.addEventListener('click', () => {
    if(active < 5)
        active += 1;

    updateInfoBox();
})


function updateInfoBox() {
    if(active == 1){
        InfoLeftBtn.classList.add('disabled-slider-btn');
    }
    else {
        InfoLeftBtn.classList.remove('disabled-slider-btn');
    }

    if(active == 2) 
        InfoSliderPart.classList.add('info_slider_part_two');
    else 
        InfoSliderPart.classList.remove('info_slider_part_two');

    if(active == 3) 
        InfoSliderPart.classList.add('info_slider_part_three');
    else 
        InfoSliderPart.classList.remove('info_slider_part_three');

    if(active == 4) 
        InfoSliderPart.classList.add('info_slider_part_four');
    else 
        InfoSliderPart.classList.remove('info_slider_part_four');

    if(active == 5){
        InfoRightBtn.classList.add('disabled-slider-btn');

        InfoSliderPart.classList.add('info_slider_part_five');
    }
    else {
        InfoRightBtn.classList.remove('disabled-slider-btn');

        InfoSliderPart.classList.remove('info_slider_part_five');
    }
}