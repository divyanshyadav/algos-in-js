/*
    n = target.length
    m = words.length

    time: O(m^n)
    space: O(n)
*/
function countConstruct (target, words, memo = {}) {
    if (target in memo) return memo[target]
    if (target === '') return [[]]

    const ways = []
    for (const word of words) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = countConstruct(suffix, words, memo)

            suffixWays.forEach(way => {
                ways.push([word, ...way])
            })
        }
    }

    memo[target] = ways
    return ways
}

module.exports = countConstruct
