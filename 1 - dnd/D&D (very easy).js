import { renderProbability } from "../Function/Probability.js"

let failCount = 0
let successCount = 0
let modifier = 1

// Calculate failures and successes based on roll + modifier from 1 to 19 (20 is a critical success)
for (let i = 1; i <= 19; i++) {
    if (i + modifier < 10) {
        failCount++;
    } else {
        successCount++;
    }
}

// Display the probability results on the page
renderProbability("Failures: " + failCount * 5 + "%");
renderProbability("Successes: " + successCount * 5 + "%");
renderProbability("Critical success: 5%");