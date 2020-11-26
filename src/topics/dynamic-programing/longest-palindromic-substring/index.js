/**
 *
 * Time complexity: O(n^3)
 * Space complexity: O(2^n)
 *
 * @param {string} string
 * @returns {string}
 */
const longestPalindromicSubstring = (string) => {
    const isPalindrome = (string) => {
        let j = string.length - 1
        for (let i = 0; i < string.length / 2; i++) {
            if (string[i] !== string[j--]) {
                return false
            }
        }

        return true
    }

    const getAllSubstrings = (string) => {
        const subStrings = []

        for (let i = 0; i < string.length; i++) {
            let subString = ''
            for (let j = i; j < string.length; j++) {
                subString += string[j]
                subStrings.push(subString)
            }
        }

        return subStrings
    }

    return getAllSubstrings(string).reduce((a, s) => {
        if (isPalindrome(s) && s.length > a.length) {
            a = s
        }

        return a
    }, '')
}

/**
 *
 * Time complexity: O(n^2)
 * Space complexity: O(n^2)
 *
 * @param {string} string
 * @returns {string}
 */
const longestPalindromicSubstring2 = (string) => {
    function createMemo (string) {
        const memo = new Array(string.length)
            .fill(null)
            .map(_ => new Array(string.length).fill(0))

        for (let i = 0; i < string.length; i++) {
            memo[i][i] = 1
        }

        for (let i = 0; i < string.length; i++) {
            const start = i
            const end = i + 1

            if (end >= string.length) {
                break
            }

            memo[start][end] = string[start] === string[end] ? 1 : 0
        }

        for (let i = 2; i < string.length; i++) {
            for (let j = 0; j < string.length; j++) {
                const start = j
                const end = j + i

                if (end >= string.length) {
                    break
                }

                if (string[start] === string[end] && memo[start + 1][end - 1] === 1) {
                    memo[start][end] = 1
                } else {
                    memo[start][end] = 0
                }
            }
        }

        return memo
    }

    const getLongestPalindrome = (string, memo) => {
        let start = 0
        let end = 0

        let maxLength = -Infinity
        for (let i = 0; i < memo.length; i++) {
            for (let j = i; j < memo.length; j++) {
                if (memo[i][j] === 1) {
                    const length = 1 + j - i

                    if (length > maxLength) {
                        start = i
                        end = j
                        maxLength = length
                    }
                }
            }
        }

        return string.slice(start, end + 1)
    }

    const memo = createMemo(string)

    return getLongestPalindrome(string, memo)
}

module.exports = longestPalindromicSubstring
module.exports = longestPalindromicSubstring2
