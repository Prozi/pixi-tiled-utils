require('pixi-shim')
require('../index.js')
window.app = new window['pixi-tiled-utils'].TiledApplication()

const json = 'https://www.vikingsvillage.io/game/assets/json/island_small_21.json'
const tileset = 'https://www.vikingsvillage.io/game/assets/img/Viking3.png'
window.app.createWorld(json, tileset, 42).then(() => {
    console.log(window.app.stage.children.length)
    process.exit(0)
})
