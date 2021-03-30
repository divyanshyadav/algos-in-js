/*
    Quick-Sort

    1) In-place   - Don't use extra space
    2) Not-stable - Don't preserves the relative order of equal keys
    3) Not-Online -
*/

const shuffle = require('../../math/shuffle')
const { swap } = require('../../../utils')

const sort = (array, asc = true) => {
    shuffle(array)

    const quickSort = (array, low, high) => {
        if (low >= high) { return }

        const j = asc ? partition(array, low, high) : partitionDesc(array, low, high)
        quickSort(array, low, j - 1)
        quickSort(array, j + 1, high)
    }

    quickSort(array, 0, array.length - 1)

    return array
}

const partitionDesc = (array, low, high) => {
    let i = low - 1
    const item = array[high]

    for (let j = low; j < high; j++) {
        if (array[j] >= item) {
            i++
            swap(array, i, j)
        }
    }

    swap(array, i + 1, high)
    return i + 1
}

const partition = (array, low, high) => {
    let i = low - 1
    const item = array[high]
    let flag = true

    for (let j = low; j < high; j++) {
        if (array[j] <= item) {
            if (array[j] < item) flag = false
            i++
            swap(array, i, j)
        } else {
            flag = false
        }
    }

    swap(array, i + 1, high)
    if (flag) {
        return Math.floor((low + high) / 2)
    }
    return i + 1
}

function randomizedQuickSort (arr) {
    function helper (arr, low, high) {
        if (low >= high) return
        const pivot = randomizedPartition(arr, low, high)
        helper(arr, low, pivot - 1)
        helper(arr, pivot + 1, high)
    }

    helper(arr, 0, arr.length - 1)
    return arr
}

function randomizedPartition (arr, low, high) {
    const index = Math.floor(Math.random() * (high - low + 1) + low)
    swap(arr, high, index)
    return partition(arr, low, high)
}

function hoarPartition (arr, low, high) {
    let i = low - 1
    let j = high + 1
    const item = arr[low]

    while (true) {
        do { j-- } while (arr[j] > item)
        do { i++ } while (arr[i] < item)
        if (i < j) swap(arr, i, j)
        else return j
    }
}

function quickSortUsingHoarPartition (arr) {
    function helper (arr, low, high) {
        if (low === high) return
        const pivot = hoarPartition(arr, low, high)
        helper(arr, low, pivot)
        helper(arr, pivot + 1, high)
    }

    helper(arr, 0, arr.length - 1)
    return arr
}

module.exports = {
    partition,
    sort: randomizedQuickSort,
    sortDesc: (arr) => sort(arr, false),
    hoarPartition,
    quickSortUsingHoarPartition
}
