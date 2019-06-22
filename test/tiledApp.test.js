require('pixi-shim')
const { TiledApplication } = require('..')
window.app = new TiledApplication()

const json = 'https://www.vikingsvillage.io/game/assets/json/island_small_21.json'
const tileset = 'https://www.vikingsvillage.io/game/assets/img/Viking3.png'
window.app.createWorld(json, tileset, 42).then(() => {
    console.log(window.app.stage.children.length)
})
