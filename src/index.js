const fs = require('fs')
const yaml = require('js-yaml')
const { WebClient } = require('@slack/client')

const web = new WebClient(process.env.SYUL_SLACK_TOKEN)

let main = async () => {
  let results = []
  let users = {}

  if (typeof process.env.SYUL_SLACK_CHANNEL === 'undefined') {
    console.log('No channel given')
    return
  }

  try {
    users = await web.apiCall('users.list', { channel: process.env.SYUL_SLACK_CHANNEL })
  } catch (err) {
    console.log(err)
  }

  users.members.forEach(user => {
    if (!user.is_bot && !user.deleted) results.push(user.profile)
  })

  fs.writeFileSync('./users.yaml', yaml.safeDump(results, {
    'styles': {
      '!!null': 'canonical'
    },
    'sortKeys': true
  }))
}

main()
