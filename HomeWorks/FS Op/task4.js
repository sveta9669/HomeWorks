const fs = require('fs');

fs.readFile('task4.json', 'utf8', (err, data) => {
  if (err) {
    return console.error(err);
  }
  let users = JSON.parse(data);
  console.log('Original data:', users);

  users.push({
    name: 'Aram',
    age: 35
  });

  fs.writeFile('task4.json', JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('New user added.');
  });
});