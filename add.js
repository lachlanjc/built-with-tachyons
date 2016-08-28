const capture = require('./capture')
const data = require('./data')
const _ = require('lodash')
const fs = require('fs')

function add (url, title, description) {
  const img = capture(url)

  const addition = {
    title,
    url,
    description,
    img
  }

  const combined = _.concat(data.sites, addition)

  const payload = JSON.stringify(_.flatten(combined), null, 2)

  const template = `module.exports = {
  sites: ${payload}
}`

  const page = url.replace(/^https?:\/\/(w+\.)?/, '')

  fs.writeFile('./data.js', template, err => {
    if (err) {
      console.log(err)
    } else {
      console.log(`${page} saved (screenshot: ${img})`)
    }
  })
}

const args = process.argv
const url = args[2]
const title = args[3]
const description = args[4]

if (url.match(/^http/)) {
  add(url, title, description)
}
