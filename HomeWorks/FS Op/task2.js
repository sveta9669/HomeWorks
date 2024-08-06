const fs = require('fs')

fs.mkdir('testDir', (err) => { err ? console.log(err) : 'x' })

// fs.writeFile('testDir/testFile.txt', 'test Text', (err) => { err ? console.log(err) : 'x' })
// fs.rename('testDir/testFile.txt', 'testDir/renamedFile.txt', (err) => { err ? console.log(err) : 'x' })

// fs.unlink('testDir/renamedFile.txt', (err) => { err ? console.log(err) : 'x' })
// fs.rmdir('testDir', (err) => { err ? console.log(err) : 'x' })