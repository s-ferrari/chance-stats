const body = document.querySelector("body")

// Function to add a new div with the given text to the page
function renderProbability(text) {
    const element = document.createElement("div");
    element.textContent = text;
    body.appendChild(element);
}

// Array representing dice rolls from 1 to 19 (20 is critical success)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

let failCount = 0
let successCount = 0
let modifier = 1

// Calculate failures and successes based on roll + modifier
for (let number of numbers) {
    if (number + modifier < 10) {
        failCount++;
    } else {
        successCount++;
    }
}

// Display the probability results on the page
renderProbability("Failures: " + failCount * 5 + "%");
renderProbability("Successes: " + successCount * 5 + "%");
renderProbability("Critical success: 5%");