/*
    Quick-Sort

    1) In-place   - Don't use extra space
    2) Not-stable - Don't preserves the relative order of equal keys
    3) Not-Online -
*/

const shuffle = require('../../shuffle')
const { swap } = require('../../utils')

const sort = (array) => {
    shuffle(array)

    const quickSort = (array, low, high) => {
        if (low >= high) { return }

        const j = partition(array, low, high)
        quickSort(array, low, j)
        quickSort(array, j + 1, high)
    }

    quickSort(array, 0, array.length - 1)

    return array
}

const partition = (array, low, high) => {
    let i = low + 1
    let j = high

    while (true) {
        while (array[i] <= array[low]) {
            i += 1
            if (i === high) { break }
        }

        while (array[j] >= array[low]) {
            j -= 1
            if (j === low) { break }
        }

        if (i >= j) { break }

        swap(array, i, j)
    }

    swap(array, j, low)

    return j
}

module.exports = {
    partition,
    sort
}
