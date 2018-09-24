// EASY: Create a node application that will read all of the planets in the solar system from a text file and print them to the console.
// Text file: mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto (I still believe in you pluto)  

const fs = require('fs')

fs.readFile('./planets.txt', 'utf8', (err, data) => {
    err ? console.log(err) : console.log(data)
})

