/*
    n = target.length
    m = words.length

    time: O(n * m * m)
    space: O(n * n)
*/
function countConstruct (target, words, memo = {}) {
    if (target in memo) return memo[target]
    if (target === '') return 1

    let count = 0
    for (const word of words) {
        if (target.indexOf(word) === 0) {
            count += countConstruct(target.slice(word.length), words, memo)
        }
    }

    memo[target] = count
    return count
}

module.exports = countConstruct
