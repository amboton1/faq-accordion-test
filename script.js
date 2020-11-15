const question = document.getElementsByClassName('question');

function renderQuestionsAnswer() {
    for (let index = 0; index < question.length; index++) {
        question[index].addEventListener('click', () => {
            let answerContent = question[index].lastElementChild.lastElementChild;
            let boldTitle = question[index].firstElementChild.firstElementChild;
            let faqArrow = question[index].firstElementChild.firstElementChild.nextElementSibling;
            console.log(faqArrow);
            
            boldTitle.classList.toggle('bold');
            faqArrow.classList.toggle('fa-chevron-up');
            answerContent.classList.toggle('show-answer');
        })
    }
}

renderQuestionsAnswer();