import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";
import triviaService from "./trivia.js";

// UI Logic

function handleButton(event) {
    event.preventDefault();
    document.querySelector("p#error").innerText = "";
    let promise = triviaService.getTrivia();
    promise.then(function (triviaResponse) {
        createCards(triviaResponse);
    }, function (errorResponse) {
        sendError(errorResponse);
    });
}

function sendError(error) {
    document.querySelector("p#error").innerText = `There was an error accessing the trivia data: ${error.status} - ${error.statusText}.`;
}

function createCards(response) {
    for (let i = 0; i < 5; i++) {
        document.querySelector(`#question${i}`).innerText = `${response.results[i].question}`;
        document.querySelector(`#answer${i}`).setAttribute("class", "hidden");
        document.querySelector(`#button${i}`).removeAttribute("class");
        document.querySelector(`#answer${i}`).innerText = `${response.results[i].correct_answer}`
    }
    document.querySelector("#cardResults").removeAttribute("class");
}

const button0 = document.querySelector("#button0");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");


document.querySelector("#questions").addEventListener("click", handleButton);

button0.addEventListener("click", function () {
    button0.setAttribute("class", "hidden");
    document.querySelector("#answer0").removeAttribute("class");
});

button1.addEventListener("click", function () {
    button1.setAttribute("class", "hidden");
    document.querySelector("#answer1").removeAttribute("class");
});

button2.addEventListener("click", function () {
    button2.setAttribute("class", "hidden");
    document.querySelector("#answer2").removeAttribute("class");
});

button3.addEventListener("click", function () {
    button3.setAttribute("class", "hidden");
    document.querySelector("#answer3").removeAttribute("class");
});

button4.addEventListener("click", function () {
    button4.setAttribute("class", "hidden");
    document.querySelector("#answer4").removeAttribute("class");
});

