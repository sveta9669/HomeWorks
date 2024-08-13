const { Readable, Writable } = require('stream');

const readable = new Readable({
  read(size) {
    for (let i = 0; i < 10; i++) {
      this.push(`Chunk ${i}\n`);
    }
    this.push(null);
  }
});

const writable = new Writable({
  write(chunk, encoding, callback) {
    console.log(`Writing: ${chunk.toString()}`);
    setTimeout(callback, 1000); // Simulate slow write with 1-second delay
  }
});

readable.pipe(writable);

writable.on('drain', () => {
  console.log('Writable stream drained.');
});

readable.on('end', () => {
  console.log('Readable stream ended.');
});
