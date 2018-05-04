let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user_score');
const compScore_span = document.getElementById('comp_score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result p');
const paper_div = document.getElementById('paper');
const rock_div = document.getElementById('rock');
const scissors_div = document.getElementById('scissors');

function getCompChoice() {
  const choices = ['r', 'p', 's'];
  return choices[Math.floor(Math.random() * 3)];
}

function convertToWord(letter) {
  switch (letter) {
    case "r":
      return "Rock";
      break;
    case "p":
      return "Paper";
      break;
    case "s":
      return "Scissors";
      break;
  }
}

function win(user, comp) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(comp)}${smallCompWord}. You win!`;
  scoreBoard_div.classList.add('green-glow');
  setTimeout(() => scoreBoard_div.classList.remove('green-glow'), 500);
}

function lose(user, comp) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(comp)}${smallCompWord} beats ${convertToWord(user)}${smallUserWord}. You lost!`;
  scoreBoard_div.classList.add('red-glow');
  setTimeout(() => scoreBoard_div.classList.remove('red-glow'), 500);
}

function draw(user, comp) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(comp)}${smallCompWord}. Draw!`;
  scoreBoard_div.classList.add('yellow-glow');
  setTimeout(() => scoreBoard_div.classList.remove('yellow-glow'), 500);
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game('r'));
  paper_div.addEventListener('click', () => game('p'));
  scissors_div.addEventListener('click', () => game('s'));
}

main();
