const fs = require('fs')


module.exports = function (cmd) { 
    if (cmd === 'cat') {
    fs.readFile('./', 'utf8', (err, data) => {
    if (err) {
        throw err
    } else {
        process.stdout.write(data)
        process.stdout.write("\nprompt > ")
    }
})
}
}