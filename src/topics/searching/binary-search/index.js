function binarySearch (array, target) {
    let low = 0
    let high = array.length - 1

    while (low <= high) {
        const midIndex = Math.floor(low + (high - low) / 2)

        if (target === array[midIndex]) { return midIndex }
        if (target < array[midIndex]) {
            high = midIndex - 1
        } else {
            low = midIndex + 1
        }
    }

    return -1
}

module.exports = binarySearch
