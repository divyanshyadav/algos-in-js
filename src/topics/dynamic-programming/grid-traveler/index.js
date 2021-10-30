/*
    time: O(m * n)
    space: O(m * n)
*/
function gridTraveler (m, n) {
    const table = new Array(m + 1)
        .fill()
        .map(() => new Array(n + 1).fill(0))

    table[1][1] = 1

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            table[i][j] += table[i - 1][j] + table[i][j - 1]
        }
    }

    return table[m][n]
}

module.exports = gridTraveler
