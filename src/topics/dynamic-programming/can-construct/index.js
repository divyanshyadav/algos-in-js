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

/*
    n = target.length
    m = words.length

    time complexity: O(n * m * n)
    space complexity: O(n * n)
*/
function canConstructTabulation (target, words) {
    const table = {}
    table[''] = true

    words.forEach(word => { table[word] = true })

    for (let i = 1; i <= target.length + 1; i++) {
        const string = target.slice(0, i)
        for (const word of words) {
            if (string.indexOf(word) === 0) {
                if (string.slice(word.length) in table) {
                    table[string] = true
                }
            }
        }
    }

    return target in table
}

module.exports = {
    canConstruct,
    canConstructTabulation
}
