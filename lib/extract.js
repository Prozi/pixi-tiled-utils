"use strict";

const PIXI = window.PIXI;

/**
 * class TextureExtractor
 */
class TextureExtractor {
  constructor({ tilewidth, tileheight, texture, offset, count, scaleMode }) {
    this.tilewidth = tilewidth;
    this.tileheight = tileheight;
    this.offset = offset || 0;
    this.texture = texture;
    this.textureCache = [];
    this.scaleMode = scaleMode || PIXI.SCALE_MODES.NEAREST;
    this._prepareTextures(count);
  }

  /**
   * get inner texture width
   * @returns number
   */
  get width() {
    return this.texture.width;
  }

  /**
   * get inner texture height
   * @returns number
   */
  get height() {
    return this.texture.height;
  }

  /**
   * prepares n-th frame (zero indexed)
   * @param {number} frame
   * @returns PIXI.Texture
   */
  prepareTexture(frame) {
    const cols = Math.floor(this.width / this.tilewidth);
    const x = ((frame - this.offset) % cols) * this.tilewidth;
    const y = Math.floor((frame - this.offset) / cols) * this.tileheight;
    const rect = new PIXI.Rectangle(x, y, this.tilewidth, this.tileheight);
    const texture = new PIXI.Texture(this.texture, rect);

    texture.baseTexture.scaleMode = this.scaleMode;
    texture.cacheAsBitmap = true;

    return texture;
  }

  /**
   * gets n-th frame (zero indexed)
   * @param {number} frame
   * @returns PIXI.Texture
   */
  getFrame(frame) {
    if (!this.textureCache[frame]) {
      this.prepareTexture(frame);
    }

    return this.textureCache[frame];
  }

  /**
   * private prepares cache up to count, used in constructor
   * @param {number} count
   */
  _prepareTextures(count) {
    const size =
      count || (this.width / this.tilewidth) * (this.height / this.tileheight);

    this.textureCache = new Array(size)
      .fill(0)
      .map((_, frame) => this.prepareTexture(frame));
  }
}

export default TextureExtractor;
