const { swap } = require('../../../utils')

const shuffle = (array) => {
    for (let i = 0; i < array.length; i++) {
        const j = Math.floor(Math.random() * array.length)
        swap(array, i, j)
    }
}

module.exports = shuffle
