import { renderProbability } from "../Function/Probability.js"

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let fullSuccess = 0;
let partialSuccess = 0;
let failure = 0;
let modifier = 0;

for (let a of numbers) {
    for (let b of numbers) {
        let roll = (a + b) + modifier;
        if (roll >= 15)
            fullSuccess++;
        else if (roll >= 10 && roll <= 14)
            partialSuccess++;
        else
            failure++;
    }
}

renderProbability("Full successes: " + fullSuccess * 1 + "%");
renderProbability("Partial successes: " + partialSuccess * 1 + "%");
renderProbability("Failures: " + failure * 1 + "%");