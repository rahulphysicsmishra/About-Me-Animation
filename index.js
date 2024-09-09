const containerE1 = document.querySelector(".container-1");
const containerE2 = document.querySelector(".container-2");
const containerE3 = document.querySelector(".container-3");

const careers = ["Instructor", "Data Scientist",
    "Product Manager", "Developer"];
let careerIndex = 0;
let charIndex = 0;

const question = ["What", "Do", "You", "Think ?"];
let questionIndex = 0;


const anotherQuestion = ["Like", "Such", "Transition ?"];
let anotherQIndex = 0;

updateText();
updateText2();
updateText3();

function updateText() {
    charIndex++;
    containerE1.innerHTML = `<h1>I'm ${careers[careerIndex].slice(0,1)==="I" ? "an" : "a"} ${careers[careerIndex].slice(0,charIndex)}</h1>`;
    if (charIndex === careers[careerIndex].length) {
        careerIndex++;
        charIndex = 0;
    } 
    if (careerIndex == careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400);   
};


function updateText2() {
    containerE2.innerHTML = `<h1>${question[questionIndex]}</h1>`;
    questionIndex++;
    if (questionIndex == question.length) {
        questionIndex = 0;
    }
    setTimeout(updateText2, 1000);
}

function updateText3() {
    containerE3.innerHTML = `<h1>Do You ${anotherQuestion[anotherQIndex]}</h1>`;
    anotherQIndex++;
    if (anotherQIndex == anotherQuestion.length) {
        anotherQIndex = 0;
    }
    setTimeout(updateText3, 1500);
}