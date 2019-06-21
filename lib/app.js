const { Application } = require('pixi-shim')

class FullscreenApplication extends Application {
  constructor(everyTick, pixiApplicationOptions) {
    super(pixiApplicationOptions)

    this.everyTick = (everyTick || function () { }).bind(this)

    document.body.style.fontSize = 0
    document.body.style.margin = 0
    document.body.appendChild(this.renderer.view)

    window.addEventListener('resize', this.requestResize)

    this.requestResize()
    this.renderLoop(performance.now())
  }
  renderLoop(time) {
    requestAnimationFrame(this.renderLoop.bind(this))
    this.everyTick(time)
  }
  requestResize() {
    this.renderer.resize(innerWidth, innerHeight)
  }
}

module.exports.FullscreenApplication = FullscreenApplication
module.exports.default = FullscreenApplication
