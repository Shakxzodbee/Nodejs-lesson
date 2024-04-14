const Events = require('events')

class Logger extends Events {
    log(a, b) {
        this.emit('canculyator', a + b)
    }
}
const logger = new Logger()
logger.on('canculyator', data=>{
    console.log(data)
})
logger.log(9,20)