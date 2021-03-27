function minCost (arr) {
    return minCostHelper(arr, 1, arr.length - 1)
}

function minCostHelper (arr, start, end) {
    if (start === end) {
        return 0
    }

    let min = Infinity
    for (let k = start; k < end; k++) {
        min = Math.min(min,
            minCostHelper(arr, start, k) +
            minCostHelper(arr, k + 1, end) +
            arr[start - 1] * arr[k] * arr[end]
        )
    }

    return min
}

module.exports = {
    minCost
}
