module.exports = class Square {
  constructor (width, height, defaultSprite) {
    this.width = width
    this.height = height
    this.sprite = defaultSprite
    this.id = `${height},${width}`
  }

  switchTo (spriteToSwitchTo) {
    this.sprite = spriteToSwitchTo
  }
}
