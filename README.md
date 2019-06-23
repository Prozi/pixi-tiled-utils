# PIXI.js Tiled utilities

## Documentation

state: poor but whole

<https://prozi.github.io/pixi-tiled-utils>

## Some information from author

* Before you import you have to have window.PIXI defined

* When you import this library you get PIXI.Tiled helper

## Whats inside the helper

* FullscreenApplication

which extends PIXI.Application and adds autoresize
and canvas of full width and height of window

* World

```javascript
  const app = new PIXI.Tiled.FullscreenApplication(tick, {
      roundPixels: true
  })
  const json = 'https://www.vikingsvillage.io/game/assets/json/island_small_21.json'
  const tileset = 'https://www.vikingsvillage.io/game/assets/img/Viking3.png'
  const tilesize = 42
  const group = ['Domek', 'Kibel', 'Bees', 'Thor', 'Meat']
  const clear = ['Spawn']

  PIXI.loader.add('resource', tileset).load((loader, { resource }) => {
      app.world = new PIXI.Tiled.World({
          tilewidth: tilesize,
          tileheight: tilesize,
          offset: 1,
          texture: resource.texture
      })
      app.world.create(json, tileset, tilesize, group, clear).then((world) => {
          app.stage.addChild(world)
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
