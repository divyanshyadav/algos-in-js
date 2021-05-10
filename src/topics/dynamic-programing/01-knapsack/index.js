function zeroOneKnapsack (weights, profits, capacity) {
    const result = new Array(weights.length).fill(0)

    function helper (index, weight) {
        if (index >= profits.length || weight <= 0) {
            return 0
        }

        if (weights[index] > weight) {
            return helper(index + 1, weight)
        }

        const take = profits[index] + helper(index + 1, weight - weights[index])
        const dontTake = helper(index + 1, weight)

        if (take > dontTake) {
            result[index] = 1
        } else {
            result[index] = 0
        }

        return Math.max(take, dontTake)
    }

    helper(0, capacity)

    return result.reduce((acc, item, index) => {
        if (item === 1) {
            acc.push(index)
        }

        return acc
    }, [])
}

function zeroOneKnapsackUsingDP (weights, profits, capacity) {
    const dp = new Array(weights.length + 1).fill(0).map(_ => new Array(capacity + 1).fill(0))

    for (let i = 1; i <= weights.length; i++) {
        for (let j = 0; j <= capacity; j++) {
            if (j - weights[i - 1] >= 0) {
                dp[i][j] = profits[i - 1] + dp[i - 1][j - weights[i - 1]]
            }

            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j])
        }
    }

    const result = []
    let i = weights.length
    let j = capacity

    while (i > 0) {
        if (dp[i - 1][j] !== dp[i][j]) {
            result.push(i - 1)
            j = j - weights[i - 1]
        }

        i--
    }

    return result.reverse()
}

module.exports = {
    zeroOneKnapsack,
    zeroOneKnapsackUsingDP
}
