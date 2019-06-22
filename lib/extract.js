const PIXI = window.PIXI

class TextureExtractor {
    constructor({
        width,
        height,
        tilewidth,
        tileheight,
        tileset,
        offset,
        count,
        scaleMode
    }) {
        this.tilewidth = tilewidth
        this.tileheight = tileheight
        this.tileset = (typeof tileset === 'string') ? PIXI.Texture.from(tileset) : tileset
        this.width = width || this.tileset.width
        this.height = height || this.tileset.height
        this.offset = offset || 0
        this.textureCache = {}
        this.scaleMode = scaleMode || PIXI.SCALE_MODES.NEAREST
        if (count) {
            for (let i = 0; i < count; i++) {
                this.prepareTexture(i)
            }
        }
    }
    prepareTexture(frame) {
        const width = (this.width / this.tilewidth)
        const x = ((frame - this.offset) % width) * this.tilewidth
        const y = Math.floor((frame - this.offset) / width) * this.tileheight
        const rect = new PIXI.Rectangle(x, y, this.tilewidth, this.tileheight)

        this.textureCache[frame] = new PIXI.Texture(this.tileset, rect)
        this.textureCache[frame].baseTexture.scaleMode = this.scaleMode
        this.textureCache[frame].cacheAsBitmap = true
    }
    getFrame(frame) {
        if (!this.textureCache[frame]) {
            this.prepareTexture(frame)
        }
        return this.textureCache[frame]
    }
}

module.exports.TextureExtractor = TextureExtractor
module.exports.default = TextureExtractor
