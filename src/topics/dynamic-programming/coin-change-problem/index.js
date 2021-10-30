const memo = new Map()

/*
    time complexity:
    space complexity:

    Recursive: top down approach
*/

const coinChangeWays = (change, coins, index = 0) => {
    if (change < 0) {
        return 0
    }

    if (index >= coins.length) {
        return 0
    }

    if (change === 0) {
        return 1
    }

    const key = `${change},${index}`

    if (memo.has(key)) {
        return memo.get(key)
    }

    const include = coinChangeWays(change - coins[index], coins, index)
    const exclude = coinChangeWays(change, coins, index + 1)

    memo.set(key, include + exclude)
    return memo.get(key)
}

module.exports = coinChangeWays
