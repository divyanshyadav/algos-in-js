
/*
    m = nums.length
    time: O(n * m)
    space: O(n)
*/
function canSum (n, nums) {
    const table = new Array(n + 1).fill(false)
    table[0] = true

    for (let i = 1; i <= n; i++) {
        for (const num of nums) {
            if (i - num >= 0) {
                table[i] = table[i] || table[i - num]
            }
        }
    }

    return table[n]
}

module.exports = canSum
