/*
    n = nums.length, m = targetSum
    time: O(n*m * m)
    space: O(m*m)
*/
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

/*
    n = nums.length, m = targetSum
    time: O(m*n * m)
    space: O(m*m)
*/
function bestSumTabulation (targetSum, nums) {
    const table = new Array(targetSum + 1).fill(null)
    table[0] = []

    for (let i = 1; i <= targetSum; i++) {
        let shortestCombination = null
        for (const num of nums) {
            const index = i - num
            if (index >= 0 && table[index] !== null) {
                const combination = [num, ...table[index]]
                if (shortestCombination === null || shortestCombination.length > combination.length) {
                    shortestCombination = combination
                }
            }
        }
        table[i] = shortestCombination
    }

    return table[targetSum]
}

module.exports = {
    bestSum,
    bestSumTabulation
}
