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
        this.prepareTextures(limit)
    }
    get width() {
        return this.texture.width
    }
    get height() {
        return this.texture.height
    }
    prepareTextures(limit) {
        const count = (limit && (limit + 1))
          || ((this.width / this.tilewidth) * (this.height / this.tileheight))

        for (let frame = 0; frame < count; frame++) {
            this.textureCache[frame] = this.prepareTexture(frame)
        }
    }
    prepareTexture(frame) {
        const width = (this.width / this.tilewidth)
        const x = ((frame - this.offset) % width) * this.tilewidth
        const y = Math.floor((frame - this.offset) / width) * this.tileheight
        const rect = new PIXI.Rectangle(x, y, this.tilewidth, this.tileheight)
        const texture = new PIXI.Texture(this.texture, rect)

        texture.baseTexture.scaleMode = this.scaleMode
        texture.cacheAsBitmap = true

        return texture
    }
    getFrame(frame) {
        if (!this.textureCache[frame]) {
            this.prepareTexture(frame)
        }

        return this.textureCache[frame]
    }
}

export { TextureExtractor }
