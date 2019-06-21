# PIXI.js Tiled utilities

If you import this library you get

* FullscreenApplication

which extends PIXI.Application and adds autoresize
and canvas of full width and height of window

* TiledApplication

```javascript
const { TiledApplication } = require('pixi-tiled-utils')

start()

async function start() {
    const app = new TiledApplication()
    await app.createWorld(
        "https://www.vikingsvillage.io/game/assets/json/island_small_21.json",
        "https://www.vikingsvillage.io/game/assets/img/Viking3.png"
    )
    app.show()
    return app
}
```

* utils

Some internally used utils that might or not be useful (just exported them because of reasons)

---

(c) 2019 Jacek Pietal, License: MIT

by players for players
