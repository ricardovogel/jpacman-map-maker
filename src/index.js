var app = new Vue({
  el: '#app',
  data: {
    map: generateMap(23, 21),
    sprites: spriteButtons
  }
})

function generateAndDownload () {
  download('map.txt', generateText(app.map))
}
