# PIXI.js Tiled utilities

## Documentation

state: poor but whole

<https://prozi.github.io/pixi-tiled-utils>

## Some information from author

- Before you import you have to have window.PIXI defined

- When you import this library you get PIXI.Tiled helper

## Whats inside the helper

- FullscreenApplication

which extends PIXI.Application and adds autoresize
and canvas of full width and height of window

- World

```javascript
// Image (c) Copyright 2016-2021 Andrzej Bieniek do not use

const app = new PIXI.Tiled.FullscreenApplication();
const json =
  "https://gist.githubusercontent.com/Prozi/4269805e2421b3e4bf563bf4bf7b3c5d/raw/c2076cd4ceef83a5c4645a5f1d6374d632cc0319/Vikings_map-21.json";
const tileset = "https://pietal.dev/game/vikings/Vikings_spritesheet-3.png";
const tilesize = 42;
const group = ["Domek", "Kibel", "Bees", "Thor", "Meat"];
const clear = ["Spawn"];

app.world = new PIXI.Tiled.World();

app.world.create(json, tileset, tilesize, group, clear).then((world) => {
  app.stage.addChild(world);

  console.log(`world has ${app.stage.children[0].children.length} children`);
});
```

see live: <https://codepan.net/gist/9cb3058fd8c27d346bdcc97f440a3c35>

- TextureExtractor

Useful if you want to slice a spritesheet

- utils

Some internally used utils that might or not be useful (just exported them because of reasons)

---

(c) 2019 Jacek Pietal, License: MIT

by players for players
