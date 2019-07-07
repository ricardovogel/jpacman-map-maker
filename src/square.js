let id = 0

class Sprite {
  constructor (id, character, image) {
    this.id = id
    this.character = character
    this.image = `img/sprites/${image}.png`
  }
}

const sprites = [
  new Sprite(0, '#', 'wall'),
  new Sprite(1, ' ', 'floor'),
  new Sprite(2, '.', 'pellet'),
  new Sprite(3, 'P', 'pacman'),
  new Sprite(4, 'G', 'ghost')
]

// function findSpriteIdByCharacter (spriteToFind) {
//   sprites.findIndex(e => e.character === spriteToFind)
// }

class Square {
  constructor (width, height) {
    this.sprite = sprites[0]
    this.width = width
    this.height = height
  }

  nextSprite () {
    this.sprite = sprites[(this.sprite.id + 1) % sprites.length]
  }

  switchTo (spriteToSwitchTo) {
    this.sprite = spriteToSwitchTo
  }
}

function switchToSelected (square) {
  square.switchTo(getSelectedSprite())
}

class ButtonSprite extends Sprite {
  constructor (id, character, image) {
    super(id, character, image)
    this.selected = false
  }

  select () {
    this.selected = true
  }

  deselect () {
    this.selected = false
  }
}

const spriteButtons = [
  new ButtonSprite(0, '#', 'wall'),
  new ButtonSprite(1, ' ', 'floor'),
  new ButtonSprite(2, '.', 'pellet'),
  new ButtonSprite(3, 'P', 'pacman'),
  new ButtonSprite(4, 'G', 'ghost')
]

var selectedSprite = spriteButtons[0]
selectedSprite.select()

function select (buttonSpriteToSelect) {
  spriteButtons.forEach(el => el.deselect())
  buttonSpriteToSelect.select()
  selectedSprite = buttonSpriteToSelect
}

function getSelectedSprite () {
  return sprites[selectedSprite.id]
}
