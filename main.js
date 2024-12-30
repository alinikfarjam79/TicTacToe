const title = document.querySelector('.title');
const startText = document.querySelector('.start');
let box = document.querySelector('.box');
let state = 0;
let spanX;
let spanY;
let choose;
let cellTags;
let line = document.querySelector('.line');
let turn = "X";
let bgGray = document.querySelector('.bg-gray');
let popup = document.querySelector('.popup');
const cells = [["", "", ""], ["", "", ""], ["", "", ""]];
function loadGame() {
    title.innerText = 'This is Tic tac toe!';
    startText.innerText = "Let's go!";
    startText.addEventListener('click', () => {
        state++;
        console.log(state);

        title.classList.add('fade-out');
        startText.classList.add('fade-out');

        if (state == 1) {
            setTimeout(() => {
                title.classList.remove('fade-out');
                startText.classList.remove('fade-out');
                title.innerText = 'Choose Your Symbol!';
                startText.innerHTML = '<span class="mr-10 X">X</span> <span class="O">O</span>';
                spanX = document.querySelector('.X');
                spanY = document.querySelector('.O');
                spanX.addEventListener('click', () => {
                    choose = 'X';
                    console.log(choose);
                });
                spanY.addEventListener('click', () => {
                    choose = 'O';
                    console.log(choose);

                });
            }, 1000);
        }
        if (state == 2) {
            setTimeout(() => {
                let count = 0;
                title.classList.remove('fade-out');
                startText.classList.remove('fade-out');
                startText.classList.add('mt-10px');
                title.classList.add('mt-20px');
                title.innerText = 'Game Start!';
                startText.innerText = 'Reset !';
                box.classList.add('flx');
                box.classList.add('vis');
                startText.addEventListener('click', () => {
                    location.reload();

                });

                cellTags = document.querySelectorAll('.cell');
                // console.log(cellTags);
                cellTags.forEach(cell => {
                    cell.addEventListener('click', () => {
                        if (cell.dataset.value == "") {
                            if (turn == 'X') {
                                let img1 = document.createElement('img');
                                img1.src = "img/x1.png";
                                let img2 = document.createElement('img');
                                img2.src = "img/x2.png";
                                cell.appendChild(img1);
                                cell.appendChild(img2);
                                console.log(turn);
                                cell.dataset.value = "X";
                                turn = "O";
                                count++
                            } else if (turn == 'O') {
                                let rand = (parseInt(Math.random() * 2) + 1);
                                console.log(rand);
                                let img1 = document.createElement('img');
                                img1.src = `img/O${rand}.png`;
                                cell.appendChild(img1);

                                cell.dataset.value = "O";
                                turn = 'X';
                                count++
                            }

                            winner = checkWin(cellTags);
                            if (winner == undefined && count == 9) {
                                setTimeout(() => {
                                    bgGray.classList.remove('hidden');
                                    let txt = document.createElement('p');
                                    let btn = document.createElement('p');
                                    txt.innerText = 'draw !';
                                    btn.innerText = 'Reseat!'
                                    btn.classList.add('start')
                                    popup.appendChild(txt);
                                    popup.appendChild(btn);
                                    btn.addEventListener('click', () => {
                                        location.reload();

                                    });
                                }, 700);
                            } else if (winner != undefined) {
                                setTimeout(() => {
                                    bgGray.classList.remove('hidden');
                                    let txt = document.createElement('p');
                                    let btn = document.createElement('p');
                                    txt.innerText = `won  ${winner}`;
                                    btn.innerText = 'Reseat!'
                                    btn.classList.add('start')
                                    popup.appendChild(txt);
                                    popup.appendChild(btn);
                                    btn.addEventListener('click', () => {
                                        location.reload();

                                    });
                                }, 700);
                            }

                        }
                    });
                });
            }, 1000);
        }
    });


}
loadGame();

function checkWin(cells) {
    let winner;
    console.log(cells[0].dataset.value);
    if (((cells[0].dataset.value == cells[1].dataset.value) && (cells[1].dataset.value == cells[2].dataset.value)) && cells[0].dataset.value != '') {
        winner = cells[0].dataset.value;
        line.classList.add('line1');
        box.setAttribute('inert', 'inert');
        // bottom: 20%;
        // rotate: 90deg;
    }
    if (((cells[3].dataset.value == cells[4].dataset.value) && (cells[3].dataset.value == cells[5].dataset.value)) && cells[3].dataset.value != '') {
        winner = cells[3].dataset.value;
        line.classList.add('line2');
        box.setAttribute('inert', 'inert');

        //         bottom: -10px;
        //   rotate: 90deg;
    }
    if (((cells[6].dataset.value == cells[7].dataset.value) && (cells[7].dataset.value == cells[8].dataset.value)) && cells[8].dataset.value != '') {
        winner = cells[6].dataset.value;
        line.classList.add('line3');
        box.setAttribute('inert', 'inert');

        //         top: 100px;
        //   rotate: 90deg;
    }
    if (((cells[0].dataset.value == cells[3].dataset.value) && (cells[3].dataset.value == cells[6].dataset.value)) && cells[6].dataset.value != '') {
        winner = cells[0].dataset.value;
        line.classList.add('line4');
        box.setAttribute('inert', 'inert');

        // top: 0;
        // left: 20px;
        // rotate: 0deg;
    }
    if (((cells[1].dataset.value == cells[4].dataset.value) && (cells[4].dataset.value == cells[7].dataset.value)) && cells[7].dataset.value != '') {
        winner = cells[1].dataset.value;
        line.classList.add('line5');
        box.setAttribute('inert', 'inert');

        //         top: 0;
        //   rotate: 0deg;
    }
    if (((cells[2].dataset.value == cells[5].dataset.value) && (cells[5].dataset.value == cells[8].dataset.value)) && cells[8].dataset.value != '') {
        winner = cells[8].dataset.value;
        line.classList.add('line6');
        box.setAttribute('inert', 'inert');

        // top: 0;
        // right: 10px;
        // rotate: 0deg;
    }
    if (((cells[0].dataset.value == cells[4].dataset.value) && (cells[4].dataset.value == cells[8].dataset.value)) && cells[8].dataset.value != '') {
        winner = cells[8].dataset.value;
        line.classList.add('line7');
        box.setAttribute('inert', 'inert');

        // top: -50px;
        // rotate: -50deg;
    }
    if (((cells[2].dataset.value == cells[4].dataset.value) && (cells[4].dataset.value == cells[6].dataset.value)) && cells[6].dataset.value != '') {
        winner = cells[6].dataset.value;
        line.classList.add('line8');
        box.setAttribute('inert', 'inert');

        // top: -15px;
        // rotate: 30deg;
    }
    return winner;
}