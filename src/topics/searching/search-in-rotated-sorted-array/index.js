/*
    Time complexity: O(logn)
    Space complexity: O(1)
*/

const findPivotIndex = (array) => {
    let low = 0
    let high = array.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const rightMid = array[mid + 1] !== undefined ? array[mid + 1] : -Infinity

        if (array[mid] >= rightMid) {
            return mid
        }

        if (array[low] <= array[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return -1
}

/*
    Time complexity: O(logn)
    Space complexity: O(1)
*/

const binarySearch = (array, value, low, high) => {
    let start = low
    let end = high

    while (start <= end) {
        const mid = Math.floor((start + end) / 2)

        if (array[mid] === value) {
            return mid
        }

        if (value < array[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }

    return -1
}

/*
    Solution 1

    Time complexity: O(2logn) => O(logn)
    Space complexity: O(1)
*/

const search = (array, target) => {
    const pivot = findPivotIndex(array)
    const foundIndex = binarySearch(array, target, 0, pivot)
    if (foundIndex !== -1) {
        return foundIndex
    }

    return binarySearch(array, target, pivot + 1, array.length - 1)
}

/*
    Solution 2

    Time complexity: O(logn)
    Space complexity: O(1)
*/

const search2 = (array, target) => {
    let low = 0
    let high = array.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)

        if (array[mid] === target) {
            return mid
        }

        if (array[low] <= array[mid]) {
            if (array[low] <= target && target < array[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else {
            if (array[mid] < target && target <= array[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }

    return -1
}

module.exports = search
module.exports = search2
