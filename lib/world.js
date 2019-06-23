const PIXI = window.PIXI
const { get } = require('axios')
const { TextureExtractor } = require('./extract')
const { tiled } = require('./tiled')
const { utils } = require('./utils')

class World {
    constructor(config) {
        if (config) {
            this.tiles = new TextureExtractor(config)
        } else {
            console.warn('Creating tile-less world')
        }
    }

    async create(json, tileset, tilesize, group = [], clear = [], pickable = []) {
        const { data } = await get(json)
        this.world = tiled.makeTiledWorld(data, tileset)

        this.objects = this.createObjects(tilesize, group, clear, pickable)
        this.ground = this.world.children.filter(({ type }) => type === 'tilelayer')
        this.sprites = this.createSprites(tilesize, clear)

        const world = new PIXI.Container()
        this.ground.length && world.addChild(...this.ground)
        this.sprites.length && world.addChild(...this.sprites)    
        return world
    }

    createObjects(tilesize, group = [], clear = [], pickable = []) {
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
                        const sprite = utils.createSprite(object.gid, tilesize, this.tiles)
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

    createSprites(tilesize = 32, clear = []) {
        return this.objects
            .filter((sprite) => !utils.contains(clear, sprite.name))
            .map((sprite) => {
                try {
                    const x = Math.round((sprite.x || 0) + (sprite.offsetx || 0))
                    const y = Math.round((sprite.y || 0) + (sprite.offsety || 0))
                    const objects = sprite.children.length ? sprite.children : [sprite]
                    const bounds = utils.getBounds(objects)
                    sprite.x = sprite.basex = bounds.left + x
                    sprite.y = sprite.basey = bounds.down + y - tilesize
                    objects.forEach((child) => {
                        child.x -= bounds.left - child.width * 0.5
                        child.y -= bounds.down - tilesize
                        child.anchor.set(0.5, 1)
                    })
                    return sprite
                } catch (err) {
                    console.error(err.message, err.stack)
                }
            })
    }
}

export { World }
