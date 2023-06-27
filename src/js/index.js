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
        document.querySelector(`#answer${i}`).innerText = `${response.results[i].correct_answer}`
    }
    document.querySelector("#cardResults").removeAttribute("class");
}

document.querySelector("#questions").addEventListener("click", handleButton);

