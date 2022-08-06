// put gameBoard in module
const gameBoard = (() => {
  const spaces = Array.from(document.querySelectorAll('.space'))
  let restartBtn = document.getElementById('restartBtn')
  const playerDisplay = document.querySelector('.display-player')
  const winPrompt = document.getElementById('win-prompt')
  
  let board = ['', '', '', '', '', '', '', ''];

  // restartBtn.addEventListener('click', restartBoard);
})()

// Create factory function for Player Object
const Player = marker => {
  const getMarker = () => marker
  const moves = []
  return { getMarker, moves}
}

const playerOne = Player('x')
const playerTwo = Player('o')

console.log(playerOne.getMarker())