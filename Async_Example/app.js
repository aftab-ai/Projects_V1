let p = document.querySelector("p");
let btn = document.querySelector("button");
let color = document.getElementById("color");
let result = document.getElementById("result");
let note = document.getElementById("note");
let cBox = document.getElementById("cBox");

// A Promise function-----------------
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num >= 2) {
                p.style.color = color;
                cBox.style.backgroundColor = color;
                resolve("Resolve: No is greater than 2");
            }   else {
                reject("Rejected: No is smaller than 2");
            }
        }, delay)
    });
}

// Button click event--------------------
btn.addEventListener("click", click);

// Async function with await, details about colour and timing.
async function click() {
    try {
        await   changeColor("red", 1000)
                color.innerHTML = "Colour changed to 'RED'.";
        await   changeColor("orange", 1000);
                color.innerHTML = "Colour changed to 'ORANGE'.";
        await   changeColor("green", 1000);
                color.innerHTML = "Colour changed to 'GREEN'.";
        await   changeColor("blue", 1000);
                color.innerHTML = "Colour changed to 'BLUE'.";
    }   catch (error) {
                result.innerHTML = "Promise is rejected"
                note.innerHTML = "If the random number between 1 - 5 is greater than 2 the whole color will be shown.";
    }
}