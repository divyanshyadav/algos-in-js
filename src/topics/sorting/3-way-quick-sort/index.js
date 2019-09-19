const { swap } = require('../../../utils')
const shuffle = require('../../math/shuffle')

const partition = (array, low, high) => {
    let lt = low
    let i = low
    let gt = high
    const v = array[low]

    while (i <= gt) {
        if (array[i] < v) {
            swap(array, i, lt)
            i += 1
            lt += 1
        } else if (array[i] > v) {
            swap(array, i, gt)
            gt -= 1
        } else {
            i += 1
        }
    }

    return { lt, gt }
}

const sort = (array) => {
    array = array.map(i => i)
    shuffle(array)

    const quickSort = (array, low, high) => {
        if (low >= high) { return }

        const { lt, gt } = partition(array, low, high)
        quickSort(array, low, lt - 1)
        quickSort(array, gt + 1, high)
    }

    quickSort(array, 0, array.length - 1)
    return array
}

module.exports = {
    partition,
    sort
}
