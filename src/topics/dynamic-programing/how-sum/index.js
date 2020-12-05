// n = nums, m = targetSum
// time: O(n*m * m)
// space: O(m*m)

function howSum(targetSum, nums, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    for (let num of nums) {
        const array = howSum(targetSum - num, nums, memo)
        if (array !== null) {
            memo[targetSum] = [...array, num]
            return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null
}

module.exports = howSum