import { Scene, WebGLRenderer, Camera, Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector3, Uniform, TextureLoader } from 'three'
import fragmentShader from './shader-ball.frag'
import vertexShader from './shader.vert'
import textureBall from './gradient_ball.jpg'
import textureNoise from './noise.jpg'
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function setup (canvas, app) {
  let loader = new TextureLoader()
  let textureBallObj = loader.load(textureBall)
  let textureNoiseObj = loader.load(textureNoise)
  console.log(textureBallObj)
  let run = true
  let renderer = new WebGLRenderer({ canvas, alpha: true })
  renderer.setClearColor(0, 0)
  let camera = new Camera()
  let scene = new Scene()
  let shader = new ShaderMaterial({
    fragmentShader,
    vertexShader,
    uniforms: {
      p1: new Uniform(new Vector3(500, 500)),
      p2: new Uniform(new Vector3(500, 500)),
      texture: new Uniform(textureBallObj),
      noise: new Uniform(textureNoiseObj),
      iResolution: new Uniform(new Vector2(500, 500)),
      iTime: new Uniform(0),
      complete: new Uniform(app.complete),
      mobile: new Uniform(0)
    }
  })

  let plane = new Mesh(
    new PlaneGeometry(2, 2),
    shader
  )

  scene.add(plane)

  let box = { left: 0, top: 0 }

  function resize () {
    box = canvas.parentElement.getBoundingClientRect()
    let width = box.width
    let height = box.height
    shader.uniforms.iResolution.value.x = width
    shader.uniforms.iResolution.value.y = height
    renderer.setSize(width, height)
  }

  let x = 0
  let y = 0
  let z = 0

  let offset = Math.random()
  let timepre = null

  let lag = 0

  function update () {
    let timenow = new Date().getTime()
    if (timepre != null) {
      let delta = timenow - timepre
      if (delta > 40) lag++
      if (lag > 20) {
        run = false
        app.lag = true
        app.$refs['c6'].style.opacity = 1
        app.$refs['c6_c'].style.opacity = 0

        console.log('too lag, disable vfx')
      }
    }
    timepre = timenow
    if (run) requestAnimationFrame(update)
    else return

    resize()
    if (app.lag) return
    let pz = shader.uniforms.p1.value.z
    shader.uniforms.p1.value.x += (x - shader.uniforms.p1.value.x) * (0.05 * pz + (1 - pz) * 0.4)
    shader.uniforms.p1.value.y += (y - shader.uniforms.p1.value.y) * (0.05 * pz + (1 - pz) * 0.4)
    shader.uniforms.p1.value.z += (z - shader.uniforms.p1.value.z) * 0.03
    shader.uniforms.complete.value += (app.targetComplete - shader.uniforms.complete.value) * 0.03
    if (app.mobile) shader.uniforms.mobile.value = 1
    else shader.uniforms.mobile.value = 0

    shader.uniforms.iTime.value = (timenow / 15000 + offset) % 1
    // shader.needsUpdate = true
    renderer.render(scene, camera)
  }

  update()
  resize()

  function mousemove (e) {
    box = canvas.parentElement.getBoundingClientRect()
    let px = e.x - box.left
    let py = box.height - (e.y - box.top)

    let dx = px / box.width - 0.5
    let dy = py / box.height - 0.5
    if (dx * dx + dy * dy < 0.5 * 0.5) {
      x = px
      y = py
      z = 1
    } else {
      x = shader.uniforms.p1.value.x
      y = shader.uniforms.p1.value.y
      z = 0
    }
  }

  canvas.parentElement.addEventListener('resize', resize)
  addEventListener('mousemove', mousemove)

  return {
    destroy () {
      run = false
      scene.dispose()
      scene = null
      canvas.parentElement.removeEventListener('resize', resize)
      removeEventListener('mousemove', mousemove)
    }
  }
}

export default {
  setup
}
