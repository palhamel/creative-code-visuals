const canvasSketch = require('canvas-sketch');

const settings = {
  // dimensions: [ 600, 600 ]
  dimensions: 'A4',
  pixelsPerInch: 300,
  
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);


    const w = 60
    const h = 60
    const gap = 20
    let x, y

    // Draw patterns with a loop:
    for (let i = 0; i < 5; i++) {
      // more rows:
      for (let j = 0; j < 5; j++) {
        x = 100 + (w + gap) * i
        y = 100 + (h + gap) * j

        context.beginPath()
        context.rect(x, y, w, h)
        context.strokeStyle = '#E81BB6'
        context.stroke()

        // Small square conditional drawing:
        if ( Math.random() > 0.5 ) {
          context.beginPath()
          context.rect(x + 8, y + 8, w - 16, h - 16)
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
