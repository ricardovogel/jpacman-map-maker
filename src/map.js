function generateMap (width, height) {
  let map = []

  for (let i = 0; i !== height; i++) {
    map[i] = []
    for (let j = 0; j !== width; j++) {
      map[i][j] = new Square(j, i)
    }
  }

  return map
}

const rowReducer = (accumulator, currentValue) =>
  accumulator + currentValue.reduce(colReducer, '') + '\n'
const colReducer = (accumulator, currentValue) =>
  accumulator + currentValue.sprite.character

function generateText (map) {
  return map.reduce(rowReducer, '')
}
