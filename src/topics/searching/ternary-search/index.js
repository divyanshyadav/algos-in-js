function ternarySearch (array, target) {
    let low = 0
    let high = array.length - 1

    while (low <= high) {
        const midIndex1 = Math.floor(low + (high - low) / 3)
        const midIndex2 = Math.floor(high - (high - low) / 3)

        if (target === array[midIndex1]) return midIndex1
        if (target === array[midIndex2]) return midIndex2
        if (target < array[midIndex1]) {
            high = midIndex1 - 1
        } else if (target > array[midIndex2]) {
            low = midIndex2 + 1
        } else {
            low = midIndex1 + 1
            high = midIndex2 - 1
        }
    }

    return -1
}

module.exports = ternarySearch
