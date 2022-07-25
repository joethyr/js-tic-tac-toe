// put gameBoard in module
const gameBoard = () => {
  const board = []
  return {
    board
  }
}

// factory for creating players
const Player = (name) => {
  const getName = () => name
  return {
    getName
  }
}
