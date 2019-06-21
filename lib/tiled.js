const PIXI = require('pixi-shim')
const TiledUtils = require('tiled-utils')

const tiled = new TiledUtils(PIXI)

module.exports.tiled = tiled
module.exports.default = tiled
