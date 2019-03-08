let userScore = 0
let pcScore = 0
const userScore_span = document.getElementById('user-score')
const pcScore_span = document.getElementById('comp-score')
const scoreBoard_div = document.querySelector('.score-board')
const result_p = document.querySelector('.result > p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function getCompChoice () {
  const choices = ['r', 'p', 's']
  return choices[Math.floor(Math.random() * choices.length)]
}

function converter (letter) {
  if (letter === 'r') return 'Камінь'
  if (letter === 's') return 'Ножиці'
  return 'Бумага'
}

function win (userChoice, compChoice) {
  const userChoiceDiv = document.getElementById(userChoice + 'div')
  const smallUser = 'юзер'.fontsize(3).sub()
  const smallComp = 'комп'.fontsize(3).sub()
  userScore++
  userScore_span.innerHTML = userScore
  result_p.innerHTML = `${converter(userChoice)}${smallUser} перемагає в ${converter(compChoice)}${smallComp}. Ви виграли!`
  userChoiceDiv.classList.remove('choice')
  userChoiceDiv.classList.add('green-glow')
  setTimeout(() => {
    userChoiceDiv.classList.remove('green-glow')
    userChoiceDiv.classList.add('choice')
  }, 300)
}

function lose (userChoice, compChoice) {
  const userChoiceDiv = document.getElementById(userChoice + 'div')
  const smallUser = 'юзер'.fontsize(3).sub()
  const smallComp = 'комп'.fontsize(3).sub()
  pcScore++
  pcScore_span.innerHTML = pcScore
  result_p.innerHTML = `${converter(compChoice)}${smallComp} перемагає в ${converter(userChoice)}${smallUser}. Ви програли!`
  userChoiceDiv.classList.remove('choice')
  userChoiceDiv.classList.add('red-glow')
  setTimeout(() => {
    userChoiceDiv.classList.remove('red-glow')
    userChoiceDiv.classList.add('choice')
  }, 300)
}

function draw (userChoice) {
  const userChoiceDiv = document.getElementById(userChoice + 'div')
  result_p.innerHTML = `Ви і комп'ютер вибрали ${converter(userChoice)}. Нічия!`
  userChoiceDiv.classList.remove('choice')
  userChoiceDiv.classList.add('gray-glow')
  setTimeout(() => {
    userChoiceDiv.classList.remove('gray-glow')
    userChoiceDiv.classList.add('choice')
  }, 300)
}

function game (userChoice) {
  const compChoice = getCompChoice()
  switch (userChoice + compChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, compChoice)
      break
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, compChoice)
      break
    case 'pp':
    case 'ss':
    case 'rr':
      draw(userChoice)
      break
  }
}

function main () {
  rock_div.addEventListener('click', () => {
    game('r')
  })

  paper_div.addEventListener('click', () => {
    game('p')
  })

  scissors_div.addEventListener('click', () => {
    game('s')
  })
}

main()
