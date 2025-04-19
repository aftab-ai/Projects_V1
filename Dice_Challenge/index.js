// Player 1 random dice Selection.
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg = "dice" + randomNumber1 + ".png";
let randomImgSource = "images/" + randomDiceImg;
document.querySelectorAll("img")[0].setAttribute("src", randomImgSource);

// Player 2 random dice Selection.
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg2 = "dice" + randomNumber2 + ".png";
let randomImgSource2 = "images/" + randomDiceImg2;
document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
