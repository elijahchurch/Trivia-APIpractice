export default class triviaService {
    static getTrivia() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            const url = "https://opentdb.com/api.php?amount=5&category=27&type=multiple";
            request.addEventListener("loadend", function () {
                if (this.status === 200) {
                    const response = JSON.parse(this.responseText);
                    resolve(response);
                } else {
                    reject(this);
                }
            });
            request.open("GET", url, true);
            request.send();
        });
    }
}
