function Setup (element, speed) {
  let run = true
  let colors = ['ffffff', 'ffc6c6', 'bbcefb', 'd6fefa', 'fcc3e8']

  let rgbs = colors.map(x => [
    parseInt(x.slice(0, 2), 16),
    parseInt(x.slice(2, 4), 16),
    parseInt(x.slice(4, 6), 16)
  ])

  let t = 0

  let v = 0

  function getLinear (x) {
    let a = (Math.floor(x)) % rgbs.length
    let b = (a + 1) % rgbs.length
    let f = x % rgbs.length - a
    return rgbs[a].map((x, i) => x * (1 - f) + rgbs[b][i] * f)
  }

  function update () {
    if (run) { requestAnimationFrame(update) }

    let c1 = getLinear(t)
    let c2 = getLinear(t + 1)

    element.style.background = `linear-gradient(to left bottom, rgb(${c2.join(',')}),rgb(${c1.join(',')}))`
    t += v + 0.003 * speed
    v *= 0.9
    if (t > rgbs.length) t -= rgbs.length
  }

  function mouseMove () {
    v += 0.001 * speed
  }

  addEventListener('mousemove', mouseMove)
  update()

  return {
    destroy: function () {
      run = false
      removeEventListener('mousemove', mouseMove)
    }
  }
}

export default {
  setup: Setup
}
