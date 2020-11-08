const question = document.getElementsByClassName('question');

function renderQuestionsAnswer() {
    for (let index = 0; index < question.length; index++) {
        question[index].addEventListener('click', () => {
            let answerContent = question[index].lastElementChild.lastElementChild;
            let faqArrow = question[index].firstElementChild.firstElementChild;
    
            faqArrow.classList.toggle('fa-chevron-up')
            answerContent.classList.toggle('show-answer')
        })
    }
}

renderQuestionsAnswer();