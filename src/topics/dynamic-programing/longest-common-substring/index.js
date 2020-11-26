/**
 * n = length of str1
 * m = length of str2
 *
 * Time complexity: O(2^(n + m))
 * Space complexity: O(n + m)
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
const longestCommonSubstring = (str1, str2) => {
    const helper = (i, j, count) => {
        if (i >= str1.length || j >= str2.length) {
            return count
        }

        return Math.max(
            str1[i] === str2[j] ? helper(i + 1, j + 1, count + 1) : count,
            helper(i + 1, j, 0),
            helper(i, j + 1, 0)
        )
    }

    return helper(0, 0, 0)
}

module.exports = longestCommonSubstring
