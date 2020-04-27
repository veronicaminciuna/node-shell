module.exports = function () {
  if (cmd === 'pwd') {
    process.stdout.write(process.cwd())
  }
  process.stdout.write('\nprompt > ')
}
