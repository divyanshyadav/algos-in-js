/*
    Approach: DP Iterative
    Time complexity: O(n^2)
    Space complexity: O(n^2)
*/

const minPathSum = (grid) => {
    const memo = grid.map(row => row.slice().fill(undefined))

    grid.forEach((row, i) => {
        row.forEach((column, j) => {
            const up = memo[i - 1] && memo[i - 1][j]
            const left = memo[i][j - 1]

            let minCost = 0
            if (up !== undefined && left !== undefined) {
                minCost = column + Math.min(up, left)
            } else if (up !== undefined) {
                minCost = column + up
            } else if (left !== undefined) {
                minCost = column + left
            } else {
                minCost = column
            }

            memo[i][j] = minCost
        })
    })

    const lastRow = memo.length - 1
    const lastColumn = memo[lastRow].length - 1

    return memo[lastRow][lastColumn]
}

module.exports = minPathSum
