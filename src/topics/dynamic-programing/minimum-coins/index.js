/*
    Time Complexity:  O(coins * change)
    Space Complexity: O(change)
*/

const minCoins = (coins = [], change) => {
    const memo = new Map()
    const helper = (change) => {
        // Path exist
        if (change === 0) {
            return 0
        }

        let min = Infinity
        coins.forEach(coin => {
            const remainingChange = change - coin
            if (remainingChange < 0) {
                return
            }

            // Check in memo
            if (!memo.has(remainingChange)) {
                memo.set(remainingChange, helper(remainingChange))
            }

            const current = 1 + memo.get(remainingChange)
            min = Math.min(min, current)
        })

        // save in memo
        memo.set(change, min)
        return memo.get(change)
    }

    const result = helper(change)

    if (result === Infinity) {
        return 0
    }

    return result
}

module.exports = minCoins
