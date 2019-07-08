/* eslint-disable no-undef */

var assert = require('assert')
var Sprite = require('../src/sprite')

describe('Sprite test', () => {
  describe('Work on its own', () => {
    var sprite
    beforeEach(() => {
      sprite = new Sprite(2, '#', 'wall')
    })
    it('should have id set', () => {
      assert.equal(sprite.id, 2)
    })
    it('should have character set', () => {
      assert.equal(sprite.character, '#')
    })
    it('should have image set', () => {
      assert.equal(sprite.image, 'img/sprites/wall.png')
    })
    it('should not be selected', () => {
      assert.equal(sprite.selected, false)
    })
    it('should have a working select() method', () => {
      sprite.select()
      assert.equal(sprite.selected, true)
    })
    it('should have a working deselect() method', () => {
      sprite.select()
      sprite.deselect()
      assert.equal(sprite.selected, false)
    })
  })
  describe('Selection with list', () => {
    var spriteList
    beforeEach(() => {
      spriteList = [new Sprite(2, '#', 'wall'), new Sprite(3, '.', 'pellet')]
      spriteList[0].select()
    })
    it('should be initialized correctly', () => {
      assert.equal(spriteList[0].id, 2)
      assert.equal(spriteList[1].id, 3)
    })
    it('should have the correct initial sprite selected', () => {
      assert.equal(spriteList[0].selected, true)
      assert.equal(spriteList[1].selected, false)
    })
    it('should have a working static getSelectedSprite() method', () => {
      assert.equal(Sprite.getSelectedSprite(spriteList), spriteList[0])
    })
    it('should have a working static selectSprite() method', () => {
      Sprite.selectSprite(spriteList[1], spriteList)
      assert.equal(spriteList[0].selected, false)
      assert.equal(spriteList[1].selected, true)
    })
  })
})
