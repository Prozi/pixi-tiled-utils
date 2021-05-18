"use strict";

const PIXI = window.PIXI;

/**
 * class FullscreenApplication
 */
class FullscreenApplication extends PIXI.Application {
  /**
   * @param {function} [everyTick]
   * @param {PIXI.ApplicationOptions} [pixiApplicationOptions]
   */
  constructor(everyTick, pixiApplicationOptions) {
    super(pixiApplicationOptions);

    this.everyTick = (everyTick || function () {}).bind(this);

    document.body.style.fontSize = 0;
    document.body.style.margin = 0;

    this.renderer && document.body.appendChild(this.renderer.view);

    window.addEventListener("resize", this.requestResize.bind(this));

    this.requestResize();
    this.renderLoop(performance.now());
  }

  /**
   * main loop gets initialized at constructor, runs everyTick function
   * @param {number} time
   */
  renderLoop(time) {
    requestAnimationFrame(this.renderLoop.bind(this));
    this.everyTick(time);
  }

  /**
   * resizes to window
   */
  requestResize() {
    this.renderer && this.renderer.resize(innerWidth, innerHeight);
  }
}

export default FullscreenApplication;
