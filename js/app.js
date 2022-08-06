// put gameBoard in module
const gameBoard = (() => {
  const spaces = Array.from(document.querySelectorAll(".space"))

  let board = ['', '', '', '', '', '', '', '']

  // restartBtn.addEventListener('click', restartBoard);
})()

const gameController = (() => {
  let restartBtn = document.getElementById("restartBtn")
  const gameMessage = document.querySelector('.game-message')
  const winPrompt = document.getElementById("win-prompt")
  const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const playerTurn = currentPlayer => {
    gameMessage.textContent = 'Player X, its your turn!'
  }
  return { playerTurn }
})()

// Create factory function for Player Object
const Player = (marker) => {
  const getMarker = () => marker
  const moves = []
  return { getMarker, moves }
}

const playerOne = Player('x')
const playerTwo = Player('o')

console.log(playerOne.getMarker())
const test = gameController
test.playerTurn()