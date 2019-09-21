const PIXI = window.PIXI

class TextureExtractor {
    constructor({
        tilewidth,
        tileheight,
        texture,
        offset,
        count,
        scaleMode
    }) {
        this.tilewidth = tilewidth
        this.tileheight = tileheight
        this.offset = offset || 0
        this.texture = texture
        this.textureCache = []
        this.scaleMode = scaleMode || PIXI.SCALE_MODES.NEAREST
        this.prepareTextures(count)
    }
    get width() {
        return this.texture.width
    }
    get height() {
        return this.texture.height
    }
    prepareTextures(count) {
        const size = (count && (count + 1))
          || ((this.width / this.tilewidth) * (this.height / this.tileheight))

        this.textureCache = new Array(size).fill(0).map((_, frame) => this.prepareTexture(frame))
    }
    prepareTexture(frame) {
        const cols = Math.floor(this.width / this.tilewidth)
        const x = ((frame - this.offset) % cols) * this.tilewidth
        const y = Math.floor((frame - this.offset) / cols) * this.tileheight
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
