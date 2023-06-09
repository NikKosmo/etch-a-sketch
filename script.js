let size = 1;
let mouseDown = false;

updateSizeValue();
createGrid();
setUpMouseDownListener();
setUpRedrawButton();

function createGrid() {
    let fieldContainer = document.querySelector("#field>.container");
    while (fieldContainer.firstChild) {
        fieldContainer.removeChild(fieldContainer.lastChild);
    }
    for (let i = 0; i < size; i++) {
        const rowDiv = createRowDiv();
        fieldContainer.appendChild(rowDiv);
    }
}

function createRowDiv() {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row")
    for (let i = 0; i < size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mousedown", colorCell);
        cell.addEventListener("pointerover", selectCell);
        cell.addEventListener("pointerout", unselectCell);
        rowDiv.appendChild(cell);
    }
    return rowDiv;
}

function selectCell(event) {
    if (mouseDown) {
        colorCell(event)
    } else {
        event.currentTarget.classList.add("selected-cell");
    }
}

function unselectCell(event) {
    event.currentTarget.classList.remove("selected-cell");
}

function colorCell(event) {
    event.currentTarget.classList.add("colored-cell");
}

function setUpMouseDownListener() {
    window.onmouseup = () => mouseDown = false;
    window.onmousedown = () => mouseDown = true;
}

function updateSizeValue() {
    let sizeElement = document.getElementById("size");
    size = sizeElement.valueAsNumber;
}

function setUpRedrawButton() {
    let redrawButton = document.getElementById("redraw");
    redrawButton.addEventListener("click", () => {
        updateSizeValue();
        createGrid();
    });
}