# PIXI.js Tiled utilities

If you import this library you get

* FullscreenApplication

which extends PIXI.Application and adds autoresize
and canvas of full width and height of window

* TiledApplication

```javascript
const PIXI = require('pixi.js')
const { TiledApplication } = require('pixi-tiled-utils')
const app = new TiledApplication()

app.createWorld(
    "https://www.vikingsvillage.io/game/assets/json/island_small_21.json",
    "https://www.vikingsvillage.io/game/assets/img/Viking3.png"
).then(() => {
    console.log(`loaded ${app.objects.length} objects`)
    console.log(`populated stage with ${app.stage.children.length} sprites`)

    process.exit(0)
})
```

* utils

Some internally used utils that might or not be useful (just exported them because of reasons)

---

(c) 2019 Jacek Pietal, License: MIT

by players for players
