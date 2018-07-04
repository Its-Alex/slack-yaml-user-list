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
    if (!user.is_bot && !user.deleted) {
      results.push({
        firstname: user.profile.first_name,
        lastname: user.profile.last_name,
        image_72: user.profile.image_72,
        image_192: user.profile.image_192,
        title: user.profile.title
      })
    }
  })

  try {
    fs.writeFileSync('./users.yaml', yaml.safeDump(results, {
      'styles': {
        '!!null': 'canonical'
      },
      'sortKeys': true,
      'skipInvalid': true
    }))
  } catch (err) {
    console.log(err)
  }
}

main()
