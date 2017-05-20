var ssbClient = require('ssb-client')
ssbClient(function (err, sbot) {
  if (err)
    throw err

  // sbot is now ready. when done:
  sbot.close()
})

function newProject() {
sbot.publish({
  type: 'rIoT-project',
  text: ''
}, function (err, msg) {
  // 'msg' includes the hash-id and headers
})
}
