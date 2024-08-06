const fs = require('fs');
const path = require('path');

// const watchDir = path.join(__dirname, 'watchDir');

fs.mkdirSync('watchDir');

fs.watch('watchDir', (eventType, filename) => {
    console.log(`Event type: ${eventType}`);
    console.log(`Filename: ${filename}`);
});

