const grid = document.querySelector("#grid");
let div;
let squares = [];

function createDiv() {
    for (let i = 0; i < 256; i++){
        div = document.createElement("div")
        squares.push(div)
        grid.append(div)
    }
}
createDiv()


squares.forEach(div => {
    div.addEventListener("mouseover", function(e){
        div.className = "paint"
});
});



