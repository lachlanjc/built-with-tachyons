const moment = require('moment')
const Pageres = require('pageres')
// const ncp = require('copy-paste')

function capture (url, opts) {
  const timestamp = moment().format('YYYY-MM-DD-hh-mm-ss')
  const filename = [
    'Screenshot',
    url.replace(/^https?:\/\//, '').replace(/\//g, '-').replace(/-$/, ''),
    timestamp
  ].join('-')

  const path = `${filename}.png`

  new Pageres({ delay: 1 })
    .src(url, ['800x600'], { filename, crop: true })
    .dest('./public/img')
    .run()
    .then(() => {
      // console.log(`${page} screenshot saved`)
      // ncp.copy(path)
      // console.log(`Filename: ${path} (copied to your clipboard)`)
    })

  return path
}

const args = process.argv
const url = args[2]

if (url.match(/^http/)) {
  capture(url)
}

module.exports = capture
