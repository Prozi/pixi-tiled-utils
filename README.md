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

```js
const PIXI = require("pixi.js");
const tu = require("pixi-tiled-utils");
const app = new tu.FullscreenApplication();
const json = {
  // json you get from Tiled application
  backgroundcolor: "#656667",
  height: 4,
  layers: [],
  nextobjectid: 1,
  orientation: "orthogonal",
  properties: [
    {
      name: "mapProperty1",
      type: "string",
      value: "one",
    },
    {
      name: "mapProperty2",
      type: "string",
      value: "two",
    },
  ],
  renderorder: "right-down",
  tileheight: 32,
  tilesets: [
    {
      // at least one tileset is required for tiled-utils
    },
  ],
  tilewidth: 32,
  version: 1,
  tiledversion: "1.0.3",
  width: 4,
};
const tileset = new PIXI.Sprite();

app.world = new PIXI.Tiled.World();
app.world.create(json, tileset).then((world) => {
  app.stage.addChild(world);

  console.log(`world has ${app.stage.children.length} children`);
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
