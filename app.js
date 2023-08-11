const grid = document.querySelector("#grid");


function createDiv() {
    for (let i = 0; i < 256; i++){
        const div = document.createElement("div")
        grid.append(div)
    }
}

createDiv()