/*
    Time Complexity:  O(coins * change)
    Space Complexity: O(change)
*/

const minCoinsCount = (coins = [], change) => {
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

const minCoins = (coins = [], change) => {
    const memo = new Map()
    const helper = (change) => {
        if (change === 0) {
            return []
        }

        let minLength = Infinity
        let minBag = []
        coins.forEach(coin => {
            const remainingChange = change - coin
            if (remainingChange < 0) {
                return
            }

            // Check in memo
            if (!memo.has(remainingChange)) {
                memo.set(remainingChange, helper(remainingChange))
            }

            const newBag = [coin, ...memo.get(remainingChange)]
            if (newBag.length < minLength) {
                minBag = newBag
                minLength = newBag.length
            }
        })

        // save in memo
        memo.set(change, minBag)
        return memo.get(change)
    }

    return helper(change)
}

module.exports = {
    minCoins,
    minCoinsCount
}
