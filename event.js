var instructionsBtn = document.querySelector(".btn-how");
var instructions = document.querySelector(".popup-index");
var instructionsText = document.querySelector(".popup-para")
console.log(instructions);

// function instructionHowToPlay() {
// instructions.classList.toggle('visible')
// }
function openInstructions(event) {
    instructions.classList.toggle('visible')
    instructionsText.classList.toggle('visible')
}
instructionsBtn.onclick = openInstructions;