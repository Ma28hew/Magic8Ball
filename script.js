// Magic 8 Ball

// Variables to Store HTML Elements
let Magic8BallEl = document.getElementById("Magic8Ball");
let resultsEl = document.getElementById("result");
let inpQ = document.getElementById("input");

// Event Listeners
Magic8BallEl.addEventListener("click", result);

// Event Functions
function result() {
    let inpEl = inpQ.value;
    inpEl = inpEl.toLowerCase();


    if (inpEl === "") {
        resultsEl.innerHTML = "Please ask a question."
    } else if (inpEl === "do you work" || inpEl === "does a magic 8 ball really work?") {
        resultsEl = "How dare you doubt me!"







    } else {


        let randNum = Math.random();
        console.log(randNum);

        if (randNum < 0.2) {
            resultsEl.innerHTML = "Without a Doubt."
        } else if (randNum < 0.4) {
            resultsEl.innerHTML = "As I see it, yes."
        } else if (randNum < 0.6) {
            resultsEl.innerHTML = "Concentrate and ask again."
        } else if (randNum < 0.8) {
            resultsEl.innerHTML = "Don't count on it"
        } else {
            resultsEl.innerHTML = "Outlook not so good."
        }
    }
}