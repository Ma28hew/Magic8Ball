// Magic 8 Ball

// Variables to Store HTML Elements
let Magic8BallEl = document.getElementById("Magic8Ball");
let results = document.getElementById("result");

// Event Listeners
Magic8BallEl.addEventListener("click", result);

// Global Variables

let Ans1 = "Without a Doubt."
let Ans2 = "As I see it, yes."
let Ans3 = "Concentrate and ask again."
let Ans4 = "Don't count on it"
let Ans5 = "Outlook not so good."


// Event Functions
function result() {

    // Process



    let randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.2) {
        results.innerHTML = Ans1
    } else if (randNum < 0.4) {
        results.innerHTML = Ans2
    } else if (randNum < 0.6) {
        results.innerHTML = Ans3
    } else if (randNum < 0.8) {
        results.innerHTML = Ans4
    } else {
        results.innerHTML = Ans5
    }





    // Output
    document.getElementById("result").innerHTML = results;
}