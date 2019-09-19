/*
    Heap Sort
    nlogn | in-place sorting algorithm
*/

const { swap } = require('../../../utils')

const minHeapComparator = (a, b) => (a - b)
const maxHeapComparator = (a, b) => (b - a)

const sort = (array, comparator = maxHeapComparator) => {
    heapify(array, comparator)
    let index = array.length - 1

    while (index >= 0) {
        swap(array, index, 0)
        sinkDown(array, 0, comparator, index)
        index -= 1
    }

    return array
}

const heapify = (array, comparator = minHeapComparator) => {
    for (let i = getParent(array.length - 1); i >= 0; i--) {
        sinkDown(array, i, comparator)
    }
    return array
}

const sinkDown = (array, index, comparator = minHeapComparator, length = array.length) => {
    let current = index
    while (current < length) {
        let leftChild = getLeftChildIndex(current)
        let rightChild = getRightChildIndex(current)
        if (leftChild >= length) leftChild = undefined
        if (rightChild >= length) rightChild = undefined

        let smallestChildIndex = leftChild

        if (comparator(array[smallestChildIndex], array[rightChild]) > 0) {
            smallestChildIndex = rightChild
        }

        if (comparator(array[current], array[smallestChildIndex]) > 0) {
            swap(array, current, smallestChildIndex)
        }

        current = smallestChildIndex
    }

    return array
}

const getLeftChildIndex = (parent) => 2 * parent + 1
const getRightChildIndex = (parent) => 2 * parent + 2
const getParent = (child) => Math.floor((child - 1) / 2)

module.exports = {
    sinkDown,
    minHeapComparator,
    maxHeapComparator,
    heapify,
    sort
}
