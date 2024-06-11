const qnaList = document.querySelector('.qna-questions-block');
const qnaBlueBlock = document.querySelector('.qna-blue-block');

const qnaBlockList = document.querySelectorAll('.qna-question');

const qnaLilHeaderList = document.querySelectorAll('.qna-fheader');
const questMarkList = document.querySelectorAll('.qna-question_icon');
const arrMarkList = document.querySelectorAll('.qna-arrow');

qnaBlockList.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('qna-question-active');
    })
});

