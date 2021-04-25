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
