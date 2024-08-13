const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'largefile.txt');
  const readStream = fs.createReadStream(filePath);

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  readStream.pipe(res);

  readStream.on('error', (err) => {
    console.error(err);
    res.end('File not found');
  });

  res.on('finish', () => {
    console.log('File successfully streamed to client.');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
