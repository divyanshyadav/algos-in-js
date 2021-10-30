/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const memo = new Map()
    const helper = (i, j, count) => {
        if (i >= text1.length || j >= text2.length) {
            return count
        }

        const key = `${i},${j},${count}`

        if (memo.has(key)) {
            return memo.get(key)
        }

        if (text1[i] === text2[j]) {
            memo.set(key, helper(i + 1, j + 1, count + 1))
            return memo.get(key)
        }

        memo.set(key, Math.max(
            helper(i + 1, j, count),
            helper(i, j + 1, count)
        ))

        return memo.get(key)
    }

    return helper(0, 0, 0)
}

module.exports = longestCommonSubsequence
