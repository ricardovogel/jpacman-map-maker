module.exports = class Sprite {
  constructor (id, character, image) {
    this.id = id
    this.character = character
    this.image = `img/sprites/${image}.png`
    this.selected = false
  }

  select () {
    this.selected = true
  }

  deselect () {
    this.selected = false
  }

  static select (spriteToSelect, listOfSprites) {
    listOfSprites.forEach(el => el.deselect())
    spriteToSelect.select()
    return spriteToSelect
  }

  static getSelectedSprite (listOfSprites) {
    return listOfSprites.filter(el => el.selected)[0]
  }
}
