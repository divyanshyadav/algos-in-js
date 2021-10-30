const ejs = require('ejs')
const fs = require('fs')
const createMarkup = require('./create-markup')

const readmeTemplatePath = './templates/README.md'
const topicsPath = './src/topics'
const readmePath = './README.md'

ejs.renderFile(readmeTemplatePath, {
    topics: createMarkup(topicsPath)
}, {}, function (err, str) {
    if (err) {
        console.log(err)
        return
    }

    saveReadme(str)
})

function saveReadme (content) {
    fs.writeFileSync(readmePath, content)
}
