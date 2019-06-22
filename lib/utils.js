const PIXI = window.PIXI

const utils = {

    getTexture(frame, tiles) {
        if (tiles && (typeof tiles.getFrame === 'function')) {
            return tiles.getFrame(frame)
        } else {
            console.warn('! tiles not set @ getTexture')
        }
        return PIXI.Texture.EMPTY
    },

    createSprite(frame, tilesize = 32, tiles = null) {
        let sprite
        if (tiles) {
            if (!isNaN(frame) && isFinite(frame)) {
                sprite = new PIXI.Sprite(utils.getTexture(~~frame, tiles))
            } else if (frame) {
                sprite = PIXI.Sprite.fromFrame(frame)
            }
        } else {
            sprite = new PIXI.Sprite()
        }
        if (sprite) {
            sprite.width = tilesize
            sprite.height = tilesize
            if (sprite.texture) {
                sprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
            }
            return sprite
        }
    },

    getModel(source, url) {
        let cursor = source
        const propList = url.split('.')
        while (cursor && propList.length) {
            cursor = cursor[propList.shift()]
        }
        return cursor
    },

    contains(array, value) {
        return value && array.some((string) => value.startsWith(string))
    },

    groupObjects(array, groupName = 'group.name') {
        return array ? array.reduce((groups, item) => {
            const cursor = utils.getModel(item, groupName)
            if (cursor) {
                if (!groups[cursor]) {
                    groups[cursor] = []
                }
                groups[cursor].push(item)
            }
            return groups
        }, {}) : {}
    },

    nameObject(target, source = {}, props = ['name', 'type']) {
        if (!target) return
        props.forEach((prop) => {
            if (source[prop] && !target[prop]) {
                target[prop] = source[prop]
            }
        })
    },

    pushObject(source, target, props) {
        if (target.indexOf(source) !== -1) return
        if (Array.isArray(source.objects)) {
            source.objects.forEach((sprite) => {
                utils.nameObject(sprite, source, props)
            })
        }
        target.push(source)
    },

    getBounds(array) {
        if (Array.isArray(array) && array.length) {
            let up = Infinity
            let left = Infinity
            let right = -Infinity
            let down = -Infinity
            let temp
            array.forEach((sprite) => {
                const w = sprite.width
                const h = sprite.height
                if ((temp = sprite.x) < left) {
                    left = temp
                }
                if ((temp = sprite.y) < up) {
                    up = temp
                }
                if ((temp = sprite.x + w) > right) {
                    right = temp
                }
                if ((temp = sprite.y + h) > down) {
                    down = temp
                }
            })
            return { up, down, left, right }
        }
        return { up: 0, down: 0, left: 0, right: 0 }
    }
}

export { utils }
