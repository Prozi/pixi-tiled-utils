const PIXI = require('pixi-shim')
require('..')
const app = new PIXI.Tiled.TiledApplication()
const json = 'https://www.vikingsvillage.io/game/assets/json/island_small_21.json'
const tileset = 'https://www.vikingsvillage.io/game/assets/img/Viking3.png'
app.createWorld(json, tileset, 42, ['Domek', 'Kibel', 'Bees', 'Thor', 'Meat'], ['Spawn']).then(() => {
    console.log('game ready')
    process.exit(0)
})
