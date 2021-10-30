/*
    n = nums.length, m = targetSum
    time: O(n*m * m)
    space: O(m*m)
*/
function howSum (targetSum, nums, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    for (const num of nums) {
        const array = howSum(targetSum - num, nums, memo)
        if (array !== null) {
            memo[targetSum] = [...array, num]
            return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null
}

/*
    n = nums.length, m = targetSum
    time: O(m*n * m)
    space: O(m*m)
*/
function howSumTabulation (targetSum, nums) {
    const table = new Array(targetSum + 1).fill(null)
    table[0] = []

    for (let i = 1; i <= targetSum; i++) {
        for (const num of nums) {
            const prevIndex = i - num
            if (prevIndex >= 0) {
                if (table[prevIndex] !== null) {
                    table[i] = [num, ...table[prevIndex]]
                }
            }
        }
    }

    return table[targetSum]
}

module.exports = {
    howSum,
    howSumTabulation
}
