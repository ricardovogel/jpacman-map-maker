/* eslint-disable no-undef */

var assert = require('assert')
var Square = require('../src/square')
var Sprite = require('../src/sprite')

describe('Square test', () => {
  var sprite
  var square
  beforeEach(() => {
    sprite = new Sprite(2, '#', 'wall')
    square = new Square(1, 2, sprite)
  })
  it('should have a working constructor', () => {
    assert.equal(square.width, 1)
    assert.equal(square.height, 2)
    assert.equal(square.sprite, sprite)
  })
  it('should have a working switchTo() method', () => {
    let newSprite = new Sprite(3, '.', 'pellet')
    square.switchTo(newSprite)
    assert.equal(square.sprite, newSprite)
  })
})
