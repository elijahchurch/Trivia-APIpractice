import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";
import triviaService from "./trivia.js";

// UI Logic

function handleButton(event) {
    event.preventDefault();
    let promise = triviaService.getTrivia();
}

// function sendError(response) {

// }

// function createCards(response) {

// }

document.querySelector("#questions").addEventListener("click", handleButton);

