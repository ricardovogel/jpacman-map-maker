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

  importMapWithText (text) {
    text = text.replace(/(\r\n|\n|\r)/gm, '')
    if (text.length !== 483) {
      throw 'incorrectMap'
    }
    let spritesLetters = ''
    this.sprites.forEach(x => {
      spritesLetters += x.character
    })
    if (
      text.split('').filter(x => {
        return spritesLetters.includes(x)
      }).length !== 483
    ) {
      throw 'incorrectMap'
    }

    for (let i = 0; i !== this.height; i++) {
      for (let j = 0; j !== this.width; j++) {
        var thisChar = text.charAt(i * this.width + j)

        var thisSprite = this.sprites.find(x => {
          return x.character === thisChar
        })
        this.map[i][j].switchTo(thisSprite)
      }
    }
  }
}
