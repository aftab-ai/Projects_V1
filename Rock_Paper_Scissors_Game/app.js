let allIcon = document.querySelectorAll("i");
let rock = document.querySelector(".rock-i");
let paper = document.querySelector(".paper-i");
let scissors = document.querySelector(".scissors-i");
let arr = [rock, paper, scissors];
let uRes = document.getElementById("click-res");
let cRes = document.getElementById("click-res2");
let result = document.getElementById("res");
let pScore = document.getElementById("p-res");
let cScore = document.getElementById("c-res");
let computerScore = 0;
let userScore = 0;

// Click Action.--------------
for (icon of allIcon) {
    icon.addEventListener("click", iconPress);
}

// Save the clicked icon & computer random icon.---------------
function iconPress() {
    let userPress = this;
    let cmp = arr[Math.floor(Math.random() * arr.length)];

// Print user pressed icons.-------------
    
    if (userPress == rock) {
        uRes.innerText = `You have pressed "Rock"!`;
    }   else if (userPress == paper) {
        uRes.innerText = `You have pressed "Paper"!`;
    }   else if (userPress == scissors) {
        uRes.innerText = `You have pressed "Scissors"!`;
    }

// Print computer pressed icons.-------------
    
    if (cmp == rock) {
        cRes.innerText = `Computer have pressed "Rock"!`;
    }   else if (cmp == paper) {
        cRes.innerText = `Computer have pressed "Paper"!`;
    }   else if (cmp == scissors) {
        cRes.innerText = `Computer have pressed "Scissors"!`;
    }

// Comparison between 'User' & 'computer'.-------------
    
    if (userPress == cmp) {
        result.innerText = "Game is tie";

    }   else if (((userPress == rock) && (cmp == paper)) || 
            ((userPress == paper) && (cmp == scissors)) || 
            ((userPress == scissors) && (cmp == rock))) {
        cScore.innerHTML = ++computerScore;     //Print computer score.------------
        result.innerText = "Computer win";

    }   else if (((userPress == rock) && (cmp == scissors)) || 
            ((userPress == paper) && (cmp == rock)) || 
            ((userPress == scissors) && (cmp == paper))) {
        pScore.innerHTML = ++userScore;         //Print player score.------------
        result.innerText = "User Win";
    }
}