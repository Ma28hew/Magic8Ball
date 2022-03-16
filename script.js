// Magic 8 Ball

// Variables to Store HTML Elements
let Magic8BallEl = document.getElementById("Magic8Ball");
let resultsEl = document.getElementById("result");

// Event Listeners
Magic8BallEl.addEventListener("click", result);

// Event Functions
function result() {

    // Process
    let results = resultsEl.value;


    let randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.2) {
        results.innerHTML = "Without a Doubt."
    } else if (randNum < 0.4) {
        results.innerHTML = "As I see it, yes."
    } else if (randNum < 0.6) {
        results.innerHTML = "Concentrate and ask again."
    } else if (randNum < 0.8) {
        results.innerHTML = "Don't count on it"
    } else {
        results.innerHTML = "Outlook not so good."
    }
}