const pwd = require('./pwd')

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim()
  pwd(cmd)
})
