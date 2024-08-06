const fs = require('fs')

try {
    fs.writeFileSync('syncExample.txt', 'Hello world!');

    const data = fs.readFileSync('syncExample.txt', 'utf8');
    console.log(data);

} catch (err) {
    console.error(err);
}

// fs.writeFile('asyncExample.txt', 'Hello!', (err) => {
//     if (err) {
//         console.error(err);
//     }
//     fs.readFile('asyncExample.txt', 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//         }
//         console.log(data);
//     });
// });