
const notDone = document.querySelectorAll(".notDone");
var statusElement = document.querySelector('.status p');

let columnEmptySlots = {
    status: { 1: 6, 2: 6, 3: 6, 4: 6, 5: 6, 6: 6, 7: 6 },
};

let redCoinsCount = 0;
let blueCoinsCount = 0;

let boardMatrix = [];

function createEmptyBoard() {
    for (let i = 0; i < 6; i++) {
        let matrixRow = [];
        for (let j = 0; j < 7; j++) {
            matrixRow.push(0);
        }
        boardMatrix.push(matrixRow);
    }
    // console.log(boardMatrix); // ? TESTING PURPOSES
}

function connected4Check(colour) {
    const rows = boardMatrix.length;
    const cols = boardMatrix[0].length;

    // Horizontal Check
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols - 3; col++) {
            if (
                boardMatrix[row][col] === colour &&
                boardMatrix[row][col + 1] === colour &&
                boardMatrix[row][col + 2] === colour &&
                boardMatrix[row][col + 3] === colour
            ) {
                return true;
            }
        }
    }

    // Vertical Check
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows - 3; row++) {
            if (
                boardMatrix[row][col] === colour &&
                boardMatrix[row + 1][col] === colour &&
                boardMatrix[row + 2][col] === colour &&
                boardMatrix[row + 3][col] === colour
            ) {
                return true;
            }
        }
    }

    // Diagonal Check (bottom-left to top-right)
    for (let row = 3; row < rows; row++) {
        for (let col = 0; col < cols - 3; col++) {
            if (
                boardMatrix[row][col] === colour &&
                boardMatrix[row - 1][col + 1] === colour &&
                boardMatrix[row - 2][col + 2] === colour &&
                boardMatrix[row - 3][col + 3] === colour
            ) {
                return true;
            }
        }
    }

    // Diagonal Check (top-left to bottom-right)
    for (let row = 0; row < rows - 3; row++) {
        for (let col = 0; col < cols - 3; col++) {
            if (
                boardMatrix[row][col] === colour &&
                boardMatrix[row + 1][col + 1] === colour &&
                boardMatrix[row + 2][col + 2] === colour &&
                boardMatrix[row + 3][col + 3] === colour
            ) {
                return true;
            }
        }
    }

    return false;
}

function gameOver(){
    notDone.forEach((slot) => {
        slot.className = 'slots Done';
    })
}

function mainGame() {
    const columnCount = 7;

    notDone.forEach((slot, index) => {
        const row = Math.floor(index / columnCount) + 1;
        const column = (index % columnCount) + 1;

        slot.setAttribute("data-row", row);
        slot.setAttribute("data-column", column);
        slot.setAttribute("slot-colour", "white");
    });
    createEmptyBoard();

    let clickCount = 0;
    notDone.forEach((slot) => {
        slot.addEventListener("click", () => {
            if ((clickCount + 1) % 2 == 0) {
                var colour = "blue";
                blueCoinsCount++;
            } else {
                var colour = "red";
                redCoinsCount++;
            }

            let clickedColumn = Number(slot.getAttribute("data-column"));
            let clickedRow = columnEmptySlots.status[clickedColumn];
            // console.log(" Clicked on Column:", clickedColumn); // ? TESTING PURPOSES

            let lastRowID = Number(clickedRow);
            if (clickedRow > 0) {
                const selectedDiv = document.querySelector(
                    `.notDone[data-row="${clickedRow}"][data-column="${clickedColumn}"]`
                );

                selectedDiv.style.backgroundColor = colour;
                selectedDiv.setAttribute("slot-colour", colour);
                // console.log("Slots left", clickedRow - 1); // ? TESTING PURPOSES
                boardMatrix[lastRowID-1][clickedColumn-1] = colour; 
                columnEmptySlots.status[clickedColumn]--;
                // console.log(boardMatrix); // ? TESTING PURPOSES
            } else {
                console.log("Stack is full!");
                lastRowID = clickedRow + 1;
            }

            if (redCoinsCount > 3 || blueCoinsCount > 3){
                let isConnected = connected4Check(colour);
                // console.log("Checking..."); // ? TESTING PURPOSES
                if (isConnected) {
                    statusElement.textContent = (colour+" has won!").toUpperCase();
                    statusElement.style.color = colour;
                    gameOver();
                    return;
                }
            }
            clickCount++;
        });
    });
}

mainGame();
