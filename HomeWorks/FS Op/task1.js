const fs = require('fs')

fs.writeFile('example.txt', 'Hello World!!!', () => {})
fs.appendFile('example.txt', 'This is Node.js FS module.', () => {

    fs.readFile('example.txt', 'utf8', (err, data) => {
        console.log('dataa')
        console.log(data)
    })
})
