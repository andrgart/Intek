const qnaList = document.querySelector('.qna-questions-block');
const qnaBlueBlock = document.querySelector('.qna-blue-block');

const qnaBlockList = document.querySelectorAll('.qna-question');
const qnaLilHeaderList = document.querySelectorAll('.qna-fheader');
const questMarkList = document.querySelectorAll('.qna-question_icon');
const arrMarkList = document.querySelectorAll('.qna-arrow');

qnaList.addEventListener('click', (event) => {
    qnaBlockList.forEach(el => {
        el.classList.remove('qna-question-active');
    });
    qnaLilHeaderList.forEach(el => {
        el.classList.remove('qna-fheader-active');
    });

    questMarkList.forEach(el => {
        el.classList.remove('qna-question_icon-active');
    });
    arrMarkList.forEach(el => {
        el.classList.remove('qna-arrow-active');
        el.style.transform = 'rotate(0deg)';
    });


    if (event.target.classList == 'qna-question-header' || event.target.classList == 'qna-fheader') {
        let qnaHeader = event.target;

        let qnaBlock = qnaHeader.closest('.qna-question');
        qnaBlock.classList.toggle('qna-question-active');

        let header_q = qnaBlock.querySelector('.qna-fheader');
        header_q.classList.toggle('qna-fheader-active');

        let questMark = qnaBlock.querySelector('.qna-question_icon');
        questMark.classList.toggle('qna-question_icon-active');

        let arrMark = qnaBlock.querySelector('.qna-arrow');
        arrMark.style.transform = 'rotate(-90deg)';
        arrMark.classList.toggle('qna-arrow-active');


        ChangeBlueBlock(qnaBlock.id);
    }
})

function ChangeBlueBlock(blockId) {
    let blueHeader = qnaBlueBlock.querySelector('.qna-blue-block-h2');
    let bluep1 = qnaBlueBlock.querySelector('.qna-blue-block-p1');
    let bluep2 = qnaBlueBlock.querySelector('.qna-blue-block-p2');

    if(blockId == 'qna-qust1'){
        blueHeader.innerHTML = 'Что нужно, чтобы начать работу с future technologies compony (FTC)?';
        bluep1.innerHTML = 'что-то можно, попробуй';
        bluep2.innerHTML = ':)';
    }

    if(blockId == 'qna-qust2'){
        blueHeader.innerHTML = 'Могу ли я не заработать, инвестируя с future technologies company (ftc)? ';
        bluep1.innerHTML = 'можешь, попробуй';
        bluep2.innerHTML = ':)';
    }

    if(blockId == 'qna-qust3'){
        blueHeader.innerHTML = 'Какая максимальная и минимальная сумма депозита?';
        bluep1.innerHTML = 'Минимальный размер депозита – 100 рублей.';
        bluep2.innerHTML = 'Максимальный размер депозита – 80 000 000 рублей.';
    }
}