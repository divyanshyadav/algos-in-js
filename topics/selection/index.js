const { partition } = require('../sorting/quick-sort')
const shuffle = require('../shuffle')

const select = (array, index) => {
    array = array.map(v => v)
    shuffle(array)

    let low = 0
    let high = array.length - 1

    while (low < high) {
        const j = partition(array, low, high)

        if (index < j) {
            high = j - 1
        } else if (index > j) {
            low = j + 1
        } else {
            return array[index]
        }
    }

    return array[index]
}

module.exports = select
