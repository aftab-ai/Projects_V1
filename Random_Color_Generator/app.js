let btn = document.querySelector("button");

btn.addEventListener("click",function() {
    let p = document.querySelector("p");
    let randomColor = getRandomColor();
    let div = document.querySelector("div");
    p.innerText = randomColor;
    div.style.backgroundColor = randomColor;

    console.log("Color updated!")
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}