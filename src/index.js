var DownloadFile = require('./saveFile')
var OpenFile = require('./openFile')
var Map = require('./map')
var Sprite = require('./sprite')
var Vue = require('vue')

var app = new Vue({
  el: '#app',
  data: {
    map: new Map(23, 21, [
      new Sprite(0, '#', 'wall'),
      new Sprite(1, ' ', 'floor'),
      new Sprite(2, '.', 'pellet'),
      new Sprite(3, 'P', 'pacman'),
      new Sprite(4, 'G', 'ghost'),
      new Sprite(5, 'A', 'apple'),
      new Sprite(6, 'B', 'bell'),
      new Sprite(7, 'C', 'cherry'),
      new Sprite(8, 'K', 'key'),
      new Sprite(9, 'M', 'melon'),
      new Sprite(10, 'O', 'orange'),
      new Sprite(11, 'S', 'strawberry'),
      new Sprite(12, 'E', 'energizer')
    ])
  }
})

app.map.sprites[0].select()

// eslint-disable-next-line no-undef
switchToSelected = square => {
  square.switchTo(Sprite.getSelectedSprite(app.map.sprites))
}

// eslint-disable-next-line no-undef
select = sprite => {
  Sprite.selectSprite(sprite, app.map.sprites)
}

// eslint-disable-next-line no-undef
generateAndDownload = () => {
  DownloadFile.download('map.txt', app.map.generateText())
}

// eslint-disable-next-line no-undef
openFile = () => {
  OpenFile.openFile(app)
}
