// Seelect all classes and ID
let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset-btn');
let newGamebtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

//plaerX, PlayerO
let turnO = true;

// All winning pattern
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Click Boxes and disabled boxes
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (turnO) {
      box.innerHTML = 'O';
      box.classList.add('O');
      turnO = false;
    } else {
      box.innerHTML = 'X';
      box.classList.add('X');
      turnO = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

// Check winning pattern
const checkwinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

// Show winner message
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove('hide');
  disableboxes();
};

// Reset game after find winner
const resetGame = () => {
  turnO = true;
  enableboxes();
  msgContainer.classList.add('hide');
};

// Diable boxes after winning game
const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// Enable boxes after finish game
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = '';
  }
};

//Add Reset button and new game button
newGamebtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);
