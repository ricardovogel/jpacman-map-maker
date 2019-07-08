var DownloadFile = require('./saveFile')
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
      new Sprite(4, 'G', 'ghost')
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
