function squareRoot (n) {
    let left = 1
    let right = n

    while (left <= right) {
        const mid = Math.floor((left + right) / 2) // 3
        const squareOfMid = mid * mid // 9

        if (squareOfMid > n) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return right
}

module.exports = squareRoot
