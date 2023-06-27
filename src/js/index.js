import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";
import triviaService from "./trivia.js";

// UI Logic

function handleButton(event) {
    event.preventDefault();
    let promise = triviaService.getTrivia();
    promise.then(function (triviaResponse) {
        createCards(triviaResponse);
    }, function (errorResponse) {
        sendError(errorResponse);
    });
}

function sendError(response) {
    document.querySelector("#error").innerText = `There was an error accessing the trivia data: ${response.status} - ${response.statusText}.`
}

// function createCards(response) {

// }

document.querySelector("#questions").addEventListener("click", handleButton);

