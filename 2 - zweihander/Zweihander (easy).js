import { renderProbability } from "../Function/Probability.js"

// Variables to count different types of roll results
let failCount = 0;
let successCount = 0;
let criticalSuccessCount = 0;
let criticalFailCount = 0;
let target = 40;

// Iterate over numbers 1 to 100 to simulate dice rolls
for (let i = 1; i <= 100; i++) {
    if (i === 1 || (i % 11 === 0 && i <= target)) {
        criticalSuccessCount++;
    } else if (i === 100 || (i % 11 === 0 && i > target)) {
        criticalFailCount++;
    } else if (i > target) {
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