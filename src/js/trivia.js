export default class triviaService {
    static getTrivia() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            const url = `https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple&token=${process.env.API_TOKEN}`;
            request.addEventListener("loadend", function () {
                const response = JSON.parse(this.responseText);
                if (this.status === 200) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            request.open("GET", url, true);
            request.send();
        });
    }
}
