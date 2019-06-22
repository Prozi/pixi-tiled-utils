const PIXI = window.PIXI

class TextureExtractor {
    constructor({
        tilewidth,
        tileheight,
        texture,
        offset,
        limit,
        scaleMode
    }) {
        this.tilewidth = tilewidth
        this.tileheight = tileheight
        this.offset = offset || 0
        this.texture = texture
        this.textureCache = {}
        this.scaleMode = scaleMode || PIXI.SCALE_MODES.NEAREST
        const count = limit || (this.width / this.tilewidth) * (this.height / this.tileheight)
        for (let i = 0; i < count; i++) {
            this.prepareTexture(i)
        }
    }
    get width() {
        return this.texture.width
    }
    get height() {
        return this.texture.height
    }
    prepareTexture(frame) {
        const width = (this.width / this.tilewidth)
        const x = ((frame - this.offset) % width) * this.tilewidth
        const y = Math.floor((frame - this.offset) / width) * this.tileheight
        const rect = new PIXI.Rectangle(x, y, this.tilewidth, this.tileheight)

        this.textureCache[frame] = new PIXI.Texture(this.texture, rect)
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

export { TextureExtractor }
