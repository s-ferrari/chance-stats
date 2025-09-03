const body = document.querySelector("body")

// Function to add a new div with the given text to the page
function renderProbability(text) {
    const element = document.createElement("div");
    element.textContent = text;
    body.appendChild(element);
}
// Variables to count different types of roll results
let failCount = 0;
let successCount = 0;
let criticalSuccessCount = 0;
let criticalFailCount = 0;

// Iterate over numbers 1 to 100 to simulate dice rolls
for (let i = 1; i <= 100; i++) {
    if (i === 1 || (i % 11 === 0 && i <= 40)) {
        criticalSuccessCount++;
    } else if (i === 100 || (i % 11 === 0 && i > 40)) {
        criticalFailCount++;
    } else if (i > 40) {
        failCount++;
    } else {
        successCount++;
    }
}

// Display the calculated probabilities on the webpage
renderProbability("Fails: " + failCount + "%");
renderProbability("Successes: " + successCount + "%");
renderProbability("Critical Successes: " + criticalSuccessCount + "%");
renderProbability("Critical Fails: " + criticalFailCount + "%");