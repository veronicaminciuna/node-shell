const pwd = require('./pwd')
//const fs = require('fs')
const ls = require('./ls')

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim()
  pwd(cmd)
  ls(cmd)
})
