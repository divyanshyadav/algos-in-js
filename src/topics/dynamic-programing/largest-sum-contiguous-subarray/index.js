const largestSumContiguousSubArray = (array) => {
    if (!Array.isArray(array)) {
        return undefined
    }

    let maxTillNow = -Infinity
    let max = -Infinity
    let startIndex = 0
    let endIndex = 0
    let maxStartIndex = 0
    let maxEndIndex = 0

    for (let i = 0; i < array.length; i++) {
        maxTillNow = maxTillNow + array[i]

        if (array[i] >= maxTillNow) {
            startIndex = i
            maxTillNow = array[i]
        }

        endIndex = i + 1

        if (maxTillNow > max) {
            maxStartIndex = startIndex
            maxEndIndex = endIndex
            max = maxTillNow
        }
    }

    return array.slice(maxStartIndex, maxEndIndex)
}

module.exports = largestSumContiguousSubArray
