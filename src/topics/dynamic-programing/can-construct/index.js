/*
    n = target.length
    m = words.length

    time complexity: O(m * n * n)
    space complexity: O(n * n)
*/

function canConstruct (target, words, memo = {}) {
    if (target in memo) return memo[target]
    if (target === '') return true

    for (const word of words) {
        if (target.indexOf(word) === 0) {
            const remaining = target.slice(word.length)
            if (canConstruct(remaining, words, memo)) {
                memo[target] = true
                return true
            }
        }
    }

    memo[target] = false
    return false
}

module.exports = canConstruct
