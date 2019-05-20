const fps = 60

let EaseIn = (power) => { return (t) => { return Math.pow(t, power) } }
let EaseOut = (power) => { return (t) => { return 1 - Math.abs(Math.pow(t - 1, power)) } }
let EaseInOut = (power) => { return (t) => { return t < 0.5 ? EaseIn(power)(t * 2) / 2 : EaseOut(power)(t * 2 - 1) / 2 + 0.5 } }

const Animate = {
  timingFunctions: {
    linear: EaseInOut(1),
    easeInQuad: EaseIn(2),
    easeOutQuad: EaseOut(2),
    easeInOutQuad: EaseInOut(2),
    easeInCubic: EaseIn(3),
    easeOutCubic: EaseOut(3),
    easeInOutCubic: EaseInOut(3),
    easeInQuart: EaseIn(4),
    easeOutQuart: EaseOut(4),
    easeInOutQuart: EaseInOut(4),
    easeInQuint: EaseIn(5),
    easeOutQuint: EaseOut(5),
    easeInOutQuint: EaseInOut(5)
  },
  start: (opt) => {
    let fpsInterval = 1000 / fps
    let lastDrawTime = performance.now()
    let startTime
    let rId
    let animate = (timestamp) => {
      rId = window.requestAnimationFrame(animate)
      let timeElapsed = timestamp - lastDrawTime
      if (timeElapsed > fpsInterval) {
        lastDrawTime = timestamp - (timeElapsed % fpsInterval)
        startTime = startTime || timestamp
        let timeElapsedSinceStart = timestamp - startTime
        let progress = timeElapsedSinceStart / opt.duration
        let safeProgress = Math.min(progress.toFixed(2), 1)
        if (safeProgress >= 1) {
          opt.draw(opt.timing(1), rId)
          Animate.stop(rId)
          opt.onLeave()
        } else {
          opt.draw(opt.timing(safeProgress), rId)
        }
      }
    }
    return animate()
  },
  stop: (rId) => {
    if (rId) window.cancelAnimationFrame(rId)
  }
}

export default Animate
