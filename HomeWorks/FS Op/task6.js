const fs = require('fs');

try {
  const data = fs.readFileSync('test.txt', 'utf8');
  console.log(data);
} catch (err) {
  if (err.code === 'ENOENT') {
    console.error('File does not exist.');
  } else {
    console.error('unexpected error', err);
  }
}
