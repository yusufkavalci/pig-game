'use strict';
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const p1_current = document.querySelector('#current--0');
const p2_current = document.querySelector('#current--1');
const p1_total = document.querySelector('#score--0');
const p2_total = document.querySelector('#score--1');
let currentPlayer = '1';
const newGame = document.querySelector('.btn--new');
const p1_page = document.querySelector('.player--0');
const p2_page = document.querySelector('.player--1');
function setTurn(turn) {
  currentPlayer = turn;
  if (turn == 1) {
    p1_page.classList.add('player--active');
    p2_page.classList.remove('player--active');
  } else {
    p2_page.classList.add('player--active');
    p1_page.classList.remove('player--active');
  }
}

const change_image = diceNumber => {
  const img = document.querySelector('.dice');
  img.src = diceNumber;
  let win_number = '100';
};
function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

roll.addEventListener('click', () => {
  const randomRoll = randomNumber();
  for (let i = 0; i <= 6; i++) {
    if (randomRoll === i) {
      change_image('dice-' + i + '.png');
      if (currentPlayer == '1') {
        if (randomRoll === 1) {
          setTurn('2');
          p1_current.innerHTML = '0';
        } else {
          p1_current.innerHTML = Number(p1_current.innerHTML) + randomRoll;

          setTurn('1');
        }
      } else {
        p2_current.innerHTML = Number(p2_current.innerHTML) + randomRoll;

        setTurn('2');
        if (randomRoll === 1) {
          setTurn('1');
          p2_current.innerHTML = '0';
        }
      }
    }
  }
});
hold.addEventListener('click', () => {
  if (currentPlayer == '1') {
    p1_total.innerHTML =
      Number(p1_total.innerHTML) + Number(p1_current.innerHTML);

    setTurn('2');
    p1_current.innerHTML = '0';

    change_image('dice-1.png');
    if (Number(p1_total.innerHTML) >= 100) {
      setTurn('1');
      p1_current.innerHTML = '0';
      p1_total.innerHTML = '0';
      p2_current.innerHTML = '0';
      p2_total.innerHTML = '0';
      change_image('dice-1.png');

      p1_page.classList.add('player--winner');
    }
  } else {
    p2_total.innerHTML =
      Number(p2_total.innerHTML) + Number(p2_current.innerHTML);

    setTurn('1');
    p2_current.innerHTML = '0';

    change_image('dice-1.png');
    if (Number(p2_total.innerHTML) >= 100) {
      setTurn('1');
      p1_current.innerHTML = '0';
      p1_total.innerHTML = '0';
      p2_current.innerHTML = '0';
      p2_total.innerHTML = '0';
      change_image('dice-1.png');

      p2_page.classList.add('player--winner');
    }
  }
});

newGame.addEventListener('click', () => {
  setTurn('1');
  p1_current.innerHTML = '0';
  p1_total.innerHTML = '0';
  p2_current.innerHTML = '0';
  p2_total.innerHTML = '0';
  change_image('dice-1.png');
  p1_page.classList.remove('player--winner');
  p2_page.classList.remove('player--winner');
  p1_page.classList.add('player--active');
});
