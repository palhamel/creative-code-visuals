const canvasSketch = require('canvas-sketch')

const settings = {
  dimensions: [1080, 1080],
}

// Function for degrees:
const degToRad = (degrees) => {
  return (degrees / 180) * Math.PI
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white'
    context.fillRect(0, 0, width, height)

    context.fillStyle = 'black'

    const x = width * 0.5
    const y = height * 0.5
    const w = width * 0.01
    const h = height * 0.1

    const num = 12

    for (let i = 0; i < num; i++) {
      const slice = degToRad(360 / num)
      const angle = slice * i

      // code for drawing a rectangle
      context.save()
      context.translate(x, y)
      context.rotate(angle)
  
      context.beginPath()
      context.rect(-w * 0.5, -h * 0.5, w, h)
      context.fill()
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
