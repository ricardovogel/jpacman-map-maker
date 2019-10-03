/* eslint-disable no-undef */

var assert = require('assert')
var Map = require('../src/map')
var Sprite = require('../src/sprite')

describe('Map test', () => {
    var map
    beforeEach(() => {
        map = new Map(3, 2, [
            new Sprite(0, '#', 'wall'),
            new Sprite(1, ' ', 'floor'),
            new Sprite(2, '.', 'pellet'),
            new Sprite(3, 'P', 'pacman'),
            new Sprite(4, 'G', 'ghost')
        ])
    })
    it('should have a working constructor', () => {
        assert.equal(map.width, 3)
        assert.equal(map.height, 2)
    })
    it('should have a working generate text method', () => {
        map.map[1][0].switchTo(new Sprite(2, '.', 'pellet'))
        map.map[0][1].switchTo(new Sprite(4, 'G', 'ghost'))
        assert.equal(map.generateText(), "#G#\n.##\n"
        )
    })
})
