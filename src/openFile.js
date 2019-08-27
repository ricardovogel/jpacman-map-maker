var Swal = require('sweetalert2')

// var Map = require('./map')
// var Sprite = require('./sprite')

module.exports.openFile = async app => {
  const { value: file } = await Swal.fire({
    backdrop: false,
    title: 'Select map file',
    input: 'file',
    inputAttributes: {
      accept: '.txt',
      'aria-label': 'Upload a map file'
    }
  })

  if (file) {
    const reader = new FileReader()
    reader.onload = e => {
      try {
        app.map.importMapWithText(e.target.result)
      } catch (e) {
        Swal.fire({
          backdrop: false,
          title: 'Map incorrect',
          text: 'There seems to be a problem with your map.',
          type: 'error'
        })
      }
    }
    reader.readAsText(file)
  }
}
