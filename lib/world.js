"use strict";

const PIXI = window.PIXI;

import TextureExtractor from "./extract";
import tu from "./tiled";
import utils from "./utils";

/**
 * class World
 */
class World {
  /**
   * step 1 - extract tiles
   * @param {object} config
   */
  constructor(config) {
    if (config) {
      this.tiles = new TextureExtractor(config);
    } else {
      console.warn("Creating tile-less world");
    }
  }

  /**
   * step 2 - create world
   * @param {object | string} jsonTiledMap
   * @param {PIXI.Sprite} tileset
   * @param {object} [layersConfiguration]
   * @returns World
   */
  async create(jsonTiledMap, tileset, layersConfiguration = {}) {
    this.world = tu.makeTiledWorld(jsonTiledMap, tileset);
    this.objects = this._createObjects(layersConfiguration);
    this.sprites = this._createSprites(layersConfiguration.clear);
    this.ground = this.world.children.filter(
      ({ type }) => type === "tilelayer"
    );

    const world = new PIXI.Container();

    this.ground.length && world.addChild(...this.ground);
    this.sprites.length && world.addChild(...this.sprites);

    return world;
  }

  /**
   * private createObjects from config: { group = [], clear = [], pickable = [] }
   * @param {object} options
   * @returns object[]
   */
  _createObjects({ group = [], clear = [], pickable = [] }) {
    const objects = [];
    const groups = utils.groupObjects(this.world.objects);
    const groupRegExp = group.map((string) => new RegExp(string));
    Object.keys(groups)
      .filter((name) => {
        const markedForRemove = utils.contains(clear, name);
        return !markedForRemove && !utils.contains(pickable, name);
      })
      .forEach((name) => {
        console.log(`┣━ parse object: ${name}`);
        const next = groups[name];
        const group = groupRegExp.find((regExp) => name.match(regExp));
        let container;
        if (group) {
          container = new PIXI.Container();
          utils.pushObject(container, objects);
          utils.nameObject(container, { name, type: "layer" });
          console.log(`┣━ add layer: ${name}`);
        }
        if (Array.isArray(next)) {
          next.forEach((object) => {
            if (object.gid) {
              const sprite = utils.createSprite(
                object.gid,
                this.world,
                this.tiles
              );
              if (sprite) {
                utils.nameObject(sprite, object, ["x", "y", "gid", "name"]);
                if (group) {
                  console.log(
                    `┣━ add object ${
                      object.name
                    } (${~~sprite.x}/${~~sprite.y}) to layer: ${name}`
                  );
                  container.addChild(sprite);
                } else {
                  utils.pushObject(sprite, objects);
                }
              }
            }
          });
        }
      });
    return objects;
  }

  /**
   * private createSprites with string[] layers exceptions
   * @param {string[]} [clear]
   * @returns object[]
   */
  _createSprites(clear = []) {
    return this.objects
      .filter((sprite) => !utils.contains(clear, sprite.name))
      .map((sprite) => {
        try {
          const x = Math.round((sprite.x || 0) + (sprite.offsetx || 0));
          const y = Math.round((sprite.y || 0) + (sprite.offsety || 0));
          const objects = sprite.children.length ? sprite.children : [sprite];
          const bounds = utils.getBounds(objects);
          sprite.x = sprite.basex = bounds.left + x;
          sprite.y = sprite.basey = bounds.down + y - this.world.tileheight;
          objects.forEach((child) => {
            child.x -= bounds.left - child.width * 0.5;
            child.y -= bounds.down - this.world.tileheight;
            child.anchor.set(0.5, 1);
          });
          return sprite;
        } catch (err) {
          console.error(err.message, err.stack);
        }
      });
  }
}

export default World;
