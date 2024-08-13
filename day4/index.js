// const EventEmitter = require('events')

// const logger = new EventEmitter()
// const callback = ()=>{
//     console.log('hi')
// }
// const callback1 = ()=>{
//     console.log('bye')
// }
// logger.on('hello', callback)
// logger.on('hello', callback1) 
// logger.prependListener('hello', callback1) 
// logger.on('bye', callback1)

// logger.once('hello')


// logger.addListener()
// logger.removeListener('hello')
// logger.removeAllListener('hello')
// logger.setMaxListeners(3)
// logger.getMaxListeners()
// logger.off('hello', callback)

// logger.emit('hello')
// logger.emit('hello', callback1)
// logger.emit('bye')



// const evName = logger.eventNames()

// const evName = logger.listenerCount('hello')

// const evName = logger.listeners('hello')
// console.log(evName)


const EventEmitter = require('events')

const logger = new EventEmitter()

let users = []
let mesg = []

const getUs = (users)=>{
    users.forEach(element => {
        console.log(`${element}`)        
    });
}
const mess = (msg)=>{
    console.log(`New Message: provided ${msg}`)
    mesg.push(msg)
}
const login = (name)=>{
    console.log(`New User: provided user ${name}`)
    users.push(name)
}
const getMess = (mess)=>{
    mess.forEach(element => {
        console.log(`${element}`)        
    });
}
logger.on('message', mess)
logger.on('login', login)
logger.on('getUsers', getUs)
logger.on('getMessages', getMess)

logger.emit('message', 'hi')
logger.emit('message', 'hello')
logger.emit('login', 'to u')
logger.emit('login', 'to u2')
logger.emit('login', 'to u222')
logger.emit('getUsers', users)
logger.emit('getMessages', mesg)

console.log(users)
console.log(mesg)