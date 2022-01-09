import canvasSketch from 'canvas-sketch'
import { degToRad } from 'canvas-sketch-util/math'
import { range } from 'canvas-sketch-util/random'
// first imports:
// const canvasSketch = require('canvas-sketch')
// const math = require('canvas-sketch-util/math')
// const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [1080, 1080],
}

// Function for degrees:
// const degToRad = (degrees) => {
//   return (degrees / 180) * Math.PI
// }

// Function for random range:
// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min
// }

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white'
    context.fillRect(0, 0, width, height)

    context.fillStyle = 'black'

    const cx = width * 0.5
    const cy = height * 0.5

    const w = width * 0.01
    const h = height * 0.1
    let x, y

    const num = 40 // number of slices
    const radius = width * 0.3

    for (let i = 0; i < num; i++) {
      const slice = degToRad(360 / num)
      const angle = slice * i

      // Trigonometry
      x = cx + radius * Math.sin(angle)
      y = cy + radius * Math.cos(angle)

      // code for drawing a rectangle/circle:
      context.save()
      context.translate(x, y)
      context.rotate(-angle)
      context.scale(range(0.1, 2), range(0.2, 0.5))

      context.beginPath()
      context.rect(-w * 0.5, range(0, -h * 0.5), w, h)
      context.fill()
      context.restore()

      // next drawing Arc:
      context.save()
      context.translate(cx, cy)
      context.rotate(-angle)

      context.lineWidth = range(5, 20);

      context.beginPath()
      context.arc(0, 0, radius * range(0.7, 1.3), slice * range(1, -8), slice * range(1, 5))
      context.stroke()

      context.restore()




    }

    // Gen a circle:
    // context.translate(100, 400)
    // context.beginPath()
    // context.arc(0, 0, 50, 0, Math.PI * 2)
    // context.fill()
  }
}

canvasSketch(sketch, settings)
