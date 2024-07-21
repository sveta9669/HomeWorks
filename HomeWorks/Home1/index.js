const commandLineArgs = require('command-line-args')

const definition = [
    { name: 'name', alias: 'n', type: String, defaultValue: "guest" },
    { name: 'greeting', alias: 'g', type: String, defaultValue: "Hello" },
    { name: 'level', alias: 'l', type: Number, defaultValue: 1 }
]

const option = commandLineArgs(definition);

const name = option.name || 'guest';
const greeting = option.greeting || 'Hello';
const level = option.level !== 2 ? 1 : 2;

let message, date = new Date();

if (level === 2) {
    message = `${greeting}, ${name}! (Date and Time: ${date})`;
} else {
    message = `${greeting}, ${name}!`;
}

console.log(message);