// n = nums.length, m = targetSum
// time: O(n*m * m)
// space: O(m*m)

function bestSum (targetSum, nums, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    let shortestCombination = null
    for (const num of nums) {
        const reminder = targetSum - num
        const array = bestSum(reminder, nums, memo)
        if (array !== null) {
            const combination = [...array, num]
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination
            }
        }
    }

    memo[targetSum] = shortestCombination
    return shortestCombination
}

module.exports = bestSum
