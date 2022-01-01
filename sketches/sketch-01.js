const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
  // dimensions: 'A4',
  // pixelsPerInch: 300,
  
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#D2FEC6';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    // Set for % of canvas dimension
    const w = width * 0.10
    const h = height * 0.10
    const gap = width * 0.03
    const ix =  width * 0.17
    const iy = height * 0.17

    const offset = width * 0.02

    let x, y

    // Draw patterns with a loop:
    for (let i = 0; i < 5; i++) {
      // more rows:
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i
        y = ix + (h + gap) * j

        context.beginPath()
        context.rect(x, y, w, h)
        context.strokeStyle = '#E81BB6'
        context.stroke()

        // Small square conditional drawing:
        if ( Math.random() > 0.5 ) {
          context.beginPath()
          context.rect(x + offset / 2, y + offset / 2, w - offset, h - offset)
          context.strokeStyle = '#1B5FE8'
          context.stroke()
        }
        // if (i > 0 && i < 4) {
        //   context.beginPath()
        //   context.rect(x + 8, y + 8, w - 16, h - 16)
        //   context.strokeStyle = '#E87B1B'
        //   context.stroke()
        // }
      }
    } 
  };
};

canvasSketch(sketch, settings);
