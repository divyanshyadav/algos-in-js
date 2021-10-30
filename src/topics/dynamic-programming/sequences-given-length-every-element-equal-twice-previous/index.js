const getTotalNumberOfSequences = (max, length) => {
    const memo = new Map()
    function helper (num, len) {
        if (len === length) {
            return 1
        }

        if (num > max) {
            return 0
        }

        const key = num + ',' + len
        if (memo.has(key)) return memo.get(key)

        const ans = helper(num * 2, len + 1) + helper(num + 1, len)
        memo.set(key, ans)
        return ans
    }

    return helper(1, 0)
}

module.exports = getTotalNumberOfSequences
