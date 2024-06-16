const boxes = document.querySelectorAll(".box");
const msgBox = document.querySelector(".msg-box");
const displayWinner= document.querySelector("p");
const settingBtns = document.querySelectorAll(".btn");

let turn = true;
let count = 0;

const winningPatterns = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
    [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
    [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
    [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
    [1, 11, 21, 31, 41, 51, 61, 71, 81, 91],
    [2, 12, 22, 32, 42, 52, 62, 72, 82, 92],
    [3, 13, 23, 33, 43, 53, 63, 73, 83, 93],
    [4, 14, 24, 34, 44, 54, 64, 74, 84, 94],
    [5, 15, 25, 35, 45, 55, 65, 75, 85, 95],
    [6, 16, 26, 36, 46, 56, 66, 76, 86, 96],
    [7, 17, 27, 37, 47, 57, 67, 77, 87, 97],
    [8, 18, 28, 38, 48, 58, 68, 78, 88, 98],
    [9, 19, 29, 39, 49, 59, 69, 79, 89, 99],
    [0, 11, 22, 33, 44, 55, 66, 77, 88, 99],
    [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(turn){
            box.innerHTML = "X";
            box.style.color = "green";
            turn = false;
        }else{
            box.innerHTML = "O";
            box.style.color = "red";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        if(count == 100 && !checkWinner()){
            drawGame();
        }
    });
});

const enabledBoxes = () => {
    turn = true;
    count = 0;
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
    msgBox.style.display = "none";
}

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const drawGame = () => {
    msgBox.style.display = "block";
    displayWinner.innerHTML = `Draw, Restart the Game!`;
    disabledBoxes();
}

const showWinner = winner => {
    msgBox.style.display = "block";
    displayWinner.innerHTML = `The Winner is '${winner}'`;
    disabledBoxes();
}

const checkWinner = () => {
    for(let pattern of winningPatterns){
        const posVal1 = boxes[pattern[0]].innerHTML;
        const posVal2 = boxes[pattern[1]].innerHTML;
        const posVal3 = boxes[pattern[2]].innerHTML;
        const posVal4 = boxes[pattern[3]].innerHTML;
        const posVal5 = boxes[pattern[4]].innerHTML;
        const posVal6 = boxes[pattern[5]].innerHTML;
        const posVal7 = boxes[pattern[6]].innerHTML;
        const posVal8 = boxes[pattern[7]].innerHTML;
        const posVal9 = boxes[pattern[8]].innerHTML;
        const posVal10 = boxes[pattern[9]].innerHTML;

        if(posVal1 != 0 && posVal2 != 0 && posVal3 != 0 && posVal4 != 0 && posVal5 != 0 && posVal6 != 0 && posVal7 != 0 && posVal8 != 0 && 
            posVal9 != 0 && posVal10 != 0){
            if(posVal1 == posVal2 && posVal2 == posVal3 && posVal3 == posVal4 && posVal4 == posVal5 && posVal5 == posVal6 && posVal6 == posVal7 && 
                posVal7 == posVal8 && posVal8 == posVal9 && posVal9 == posVal10){
                    showWinner(posVal1);
                }
        }
    }
}

for(let button of settingBtns){
    button.addEventListener("click", enabledBoxes);
}