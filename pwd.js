// process.stdout.write('prompt > ')
// process.stdin.on('data', data => {
//   const cmd = process.cwd()

//   process.stdout.write('You typed: ' + cmd)
//   process.stdout.write('\nprompt > ')
// })

module.exports = function() {
  const cmd = process.cwd()

  process.stdout.write('You typed: ' + cmd)
  process.stdout.write('\nprompt > ')
}
