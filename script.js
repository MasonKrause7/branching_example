const colors = ["red", "blue", "green", "purple"];

function genRandomIndex(){
    let cap = colors.length;
    let randomIndex = Math.floor(Math.random() * cap);
    return randomIndex
}

function changeColor(){
    let randomIndex = genRandomIndex()
    const container = document.getElementById("container");
    container.style.backgroundColor = colors[randomIndex]
}

