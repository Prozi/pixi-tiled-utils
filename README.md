# PIXI.js Tiled utilities

If you import this library you get

* FullscreenApplication

which extends PIXI.Application and adds autoresize
and canvas of full width and height of window

* TiledApplication

```javascript
    // window.PIXI = require('pixi.js')
    const { TiledApplication } = window['pixi-tiled-utils']
    window.app = new TiledApplication()

    const json = 'https://www.vikingsvillage.io/game/assets/json/island_small_21.json'
    const tileset = 'https://www.vikingsvillage.io/game/assets/img/Viking3.png'

    PIXI.loader.add('resource', tileset).load((loader, { resource }) => {
        window.app.createTiles({
            tilewidth: 42,
            tileheight: 42,
            offset: 1,
            texture: resource.texture
        })
        window.app.createWorld(json, tileset, 42).then(() => {
            console.log(window.app.stage.children.length)
        })
    })
```

* TextureExtractor

Useful if you want to slice a spritesheet

* utils

Some internally used utils that might or not be useful (just exported them because of reasons)

---

(c) 2019 Jacek Pietal, License: MIT

by players for players
