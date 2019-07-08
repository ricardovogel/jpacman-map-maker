var Square = require('./square')
module.exports = class Map {
  constructor (width, height, sprites) {
    this.width = width
    this.height = height
    this.sprites = sprites
    this.map = Map.generateMap(width, height, sprites[0])
  }

  generateText () {
    return this.map.reduce(
      (accRow, curRow) =>
        accRow +
        curRow.reduce(
          (accCell, curCell) => accCell + curCell.sprite.character,
          ''
        ) +
        '\n',
      ''
    )
  }

  static generateMap (width, height, defaultSprite) {
    let map = []

    for (let i = 0; i !== height; i++) {
      map[i] = []
      for (let j = 0; j !== width; j++) {
        map[i][j] = new Square(j, i, defaultSprite)
      }
    }

    return map
  }
}
