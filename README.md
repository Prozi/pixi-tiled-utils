# PIXI.js Tiled utilities

## Documentation

state: poor but whole

<https://prozi.github.io/pixi-tiled-utils>

## Some information from author

If you import this library you get

* FullscreenApplication

which extends PIXI.Application and adds autoresize
and canvas of full width and height of window

* TiledApplication

```javascript
const vikings = 'https://www.vikingsvillage.io/game/assets'
const json = `${vikings}/json/island_small_21.json`
const tileset = `${vikings}/img/Viking3.png`

const app = new tiledUtils.TiledApplication(tick, {
  roundPixels: true
})

PIXI.loader.add('resource', tileset)
  .load((loader, { resource }) => {
    const tilesize = 42
    const group = ['Domek', 'Kibel', 'Bees', 'Thor', 'Meat']
    const clear = ['Spawn']

    app.stage.scale.set(3)
    app.createTiles({
      tilewidth: tilesize,
      tileheight: tilesize,
      offset: 1,
      texture: resource.texture
    })
    app.createWorld(json, tileset, tilesize, group, clear)
      .then(() => {
        console.log('tilemap converted into pixi primitives')
      })
  })

function tick(time) {
  this.stage.position.set(
    -this.stage.width / 2 + innerWidth / 2,
    -this.stage.height / 2 + innerHeight / 2
  )
}
```

see live: <https://codepan.net/gist/9cb3058fd8c27d346bdcc97f440a3c35>

* TextureExtractor

Useful if you want to slice a spritesheet

* utils

Some internally used utils that might or not be useful (just exported them because of reasons)

---

(c) 2019 Jacek Pietal, License: MIT

by players for players
