// Function to add a new div with the given text to the page
export function renderProbability(text) {
    const element = document.createElement("div");
    element.textContent = text;
    document.body.appendChild(element);
}