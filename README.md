### Labs making graphics with code - work in progress 


- run canvas Sketch via command line:

# Run and open in browser:
> canvas-sketch src/foobar.js --open
> canvas-sketch [filename] --open

Create new sketches in /sketches/

# Connect output folder for img exports like:
canvas-sketch sketch-02 --output=output/02
- then 'CMD + S' to save images to output folder

# Run the development server on an existing file
canvas-sketch src/foobar.js

# Start a new sketch from the Three.js template
canvas-sketch --new --template=three --open

# Build your sketch to a sharable HTML + JS website
canvas-sketch sketches/my-sketch.js --build

# Paste the clipboard contents & run a new sketch at './foo.js'
pbpaste | canvas-sketch foo.js --new



https://github.com/mattdesl/canvas-sketch

https://github.com/mattdesl/canvas-sketch/blob/master/docs/README.md

