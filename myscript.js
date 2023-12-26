function onQuestionClick(element) {
    resetAllAnwers();
    resetAllIcons();
    let image = element.querySelectorAll(".question img")[0];
    image.setAttribute("src", "./assets/images/icon-minus.svg");
    image.setAttribute("alt", "minus");

    let answer = element.getElementsByClassName("answer")[0];
    answer.classList.add("answer-active");
}

function resetAllAnwers() {
    let answers = document.getElementsByClassName("answer");
    for (const answer of answers) {
        answer.classList.remove("answer-active");
    };
}

function resetAllIcons() {
    let images = document.querySelectorAll(".question img");
    for (const image of images) {
        image.setAttribute("src", "./assets/images/icon-plus.svg");
        image.setAttribute("alt", "plus");
    }
}