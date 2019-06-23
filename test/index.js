const PIXI = require('pixi-shim')
require('..')

const app = new PIXI.Tiled.FullscreenApplication()
const json = 'https://www.vikingsvillage.io/game/assets/json/island_small_21.json'
const tileset = 'https://www.vikingsvillage.io/game/assets/img/Viking3.png'
const tilesize = 42
const group = ['Domek', 'Kibel', 'Bees', 'Thor', 'Meat']
const clear = ['Spawn']

app.world = new PIXI.Tiled.World()
app.world.create(json, tileset, tilesize, group, clear).then((world) => {
    app.stage.addChild(world)
    console.log(`world has ${app.stage.children[0].children.length} children`)
    process.exit(0)
})
