const PIXI = require("pixi-shim");
const tu = require("../lib/index.js");
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
