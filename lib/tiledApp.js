const PIXI = require('pixi-shim')
const { get } = require('axios')
const { FullscreenApplication } = require('./app')
const { tiled } = require('./tiled')
const { utils } = require('./utils')

class TiledApplication extends FullscreenApplication {
    constructor(everyTick, options) {
        super(everyTick, options)
    }

    async createWorld(world, tileset, group = [], clear = [], pickable = []) {
        const worldJson = await get(world)
        const tilesetJson = await get(tileset)
        this.world = tiled.makeTiledWorld(worldJson.data, tilesetJson.data)
        this.objects = this.createObjects(group, clear, pickable)
        this.sprites = this.createSprites(clear)
        this.sprites.forEach((sprite) => this.stage.addChild(sprite))
    }

    createObjects(group = [], clear = [], pickable = []) {
        const objects = []
        const groups = utils.groupObjects(this.world.objects)
        const groupRegExp = group.map((string) => new RegExp(string))
        Object.keys(groups).filter((name) => {
            const markedForRemove = utils.contains(clear, name)
            return (!markedForRemove && !utils.contains(pickable, name))
        }).forEach((name) => {
            console.log(`┣━ parse object: ${name}`)
            const next = groups[name]
            const group = groupRegExp.find((regExp) => name.match(regExp))
            let container
            if (group) {
                container = new PIXI.Container()
                utils.pushObject(container, objects)
                utils.nameObject(container, { name, type: 'layer' })
                console.log(`┣━ add layer: ${name}`)
            }
            if (Array.isArray(next)) {
                next.forEach((object) => {
                    if (object.gid) {
                        const sprite = utils.createSprite(object.gid, this.tiles)
                        if (sprite) {
                            utils.nameObject(sprite, object, ['x', 'y', 'gid', 'name'])
                            if (group) {
                                console.log(`┣━ add object ${object.name} (${~~sprite.x}/${~~sprite.y}) to layer: ${name}`)
                                container.addChild(sprite)
                            } else {
                                utils.pushObject(sprite, objects)
                            }
                        }
                    }
                })
            }
        })
        return objects
    }

    createSprites(clear = [], tileSize = 32) {
        return this.objects
            .filter((sprite) => !utils.contains(clear, sprite.name))
            .map((sprite) => {
                try {
                    const x = Math.round((sprite.x || 0) + (sprite.offsetx || 0))
                    const y = Math.round((sprite.y || 0) + (sprite.offsety || 0))
                    const objects = sprite.children.length ? sprite.children : [sprite]
                    const bounds = utils.getBounds(objects)
                    sprite.x = sprite.basex = bounds.left + x
                    sprite.y = sprite.basey = bounds.down + y - tileSize
                    objects.forEach((child) => {
                        child.x -= bounds.left - child.width * 0.5
                        child.y -= bounds.down - tileSize
                        child.anchor.set(0.5, 1)
                    })
                    return sprite
                } catch (err) {
                    console.error(err.message, err.stack)
                }
            })
    }
}

module.exports.TiledApplication = TiledApplication
module.exports.default = TiledApplication
