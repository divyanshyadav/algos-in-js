const fs = require('fs')
const path = require('path')

function getDirMap (dir) {
    const map = {}
    fs.readdirSync(dir).forEach(file => {
        const stats = fs.lstatSync(path.join(dir, file))
        if (stats.isDirectory()) {
            map[file] = getDirMap(path.join(dir, file))
        } else {
            map[file] = false
        }
    })

    return map
}

function createList (dirMap, dir, depth) {
    const list = []

    if (depth > 0) { list.push(`${addTabs(depth + 1)}<ul>`) }

    Object.keys(dirMap).forEach(key => {
        const file = dirMap[key]
        const filePath = dir + '/' + key
        const name = getName(key)

        // if dir
        if (file) {
            if (hasNoSubDirs(file)) {
                list.push(`${addTabs(depth + 1)}<li><a href='${filePath}'>${name}</a></li>`)
            } else {
                if (depth === 0) {
                    list.push(`\n## ${name}`)
                } else {
                    list.push(`${addTabs(depth + 1)}<li>${name}</li>`)
                }
                list.push(createList(file, filePath, depth + 1))
            }
        }
    })

    if (depth > 0) { list.push(`${addTabs(depth)}</ul>`) }

    return list.join('\n').trim()
}

function hasNoSubDirs (file) {
    return Object.values(file).every(value => !value)
}

function addTabs (count) {
    return '  '.repeat(count)
}

function getName (fileName) {
    return fileName.split('-').map(capitalize).join(' ')
}

function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function createMarkup (dir) {
    const dirMap = getDirMap(dir)
    return createList(dirMap, dir, 0)
}

module.exports = createMarkup
