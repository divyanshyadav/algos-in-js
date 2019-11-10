/*
    Number of ways to climb up the staircase
    Given: staircase size and allows step(s) taken at a time
*/

const memo = new Map()

const ways = (n, steps) => {
    if (n < 0) {
        return 0
    }

    if (n === 0) {
        return 1
    }

    if (!memo.has(n)) {
        let count = 0

        steps.forEach(step => {
            count += ways(n - step, steps)
        })

        memo.set(n, count)
    }

    return memo.get(n)
}

module.exports = ways
