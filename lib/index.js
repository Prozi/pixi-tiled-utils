const { FullscreenApplication } = require('./app')
const { TiledApplication } = require('./tiledApp')
const { TextureExtractor } = require('./extract')
const { utils } = require('./utils')

export {
    FullscreenApplication,
    TiledApplication,
    TextureExtractor,
    utils
}

/* global window */
window.PIXI.Tiled = { FullscreenApplication, TiledApplication, TextureExtractor, utils }
