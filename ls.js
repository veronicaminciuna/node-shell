const fs = require('fs')


module.exports = function (cmd) { 
    if (cmd === 'ls') {
    fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
        throw err
    } else {
        process.stdout.write(files.join('\n'))
        process.stdout.write("\nprompt > ")
    }
})
}
}