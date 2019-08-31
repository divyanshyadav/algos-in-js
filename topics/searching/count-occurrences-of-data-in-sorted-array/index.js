/*
    Time Complexity: O(logn)
    Space Complexity: O(logn)
*/

const countOccurrences = (array, key) => {
    const first = findFirstOccurrence(array, key)
    const last = findLastOccurrence(array, key)

    if (first === -1 || last === -1) {
        return 0
    } else if (first === last) {
        return 1
    } else {
        return last - first + 1
    }
}

const findFirstOccurrence = (array, key) => {
    const helper = (start, end) => {
        if (start > end) {
            return -1
        }

        const mid = Math.floor(start + (end - start) / 2)

        if (key > array[mid]) {
            return helper(mid + 1, end)
        } else if (array[mid] === key && (mid === 0 || array[mid - 1] < key)) {
            return mid
        } else {
            return helper(start, mid - 1)
        }
    }

    return helper(0, array.length - 1)
}

const findLastOccurrence = (array, key) => {
    const helper = (start, end) => {
        if (start > end) {
            return -1
        }

        const mid = Math.floor(start + (end - start) / 2)

        if (key < array[mid]) {
            return helper(start, mid - 1)
        } else if (array[mid] === key && (mid === array.length - 1 || array[mid + 1] > key)) {
            return mid
        } else {
            return helper(mid + 1, end)
        }
    }

    return helper(0, array.length - 1)
}

module.exports = {
    countOccurrences,
    findFirstOccurrence,
    findLastOccurrence
}
