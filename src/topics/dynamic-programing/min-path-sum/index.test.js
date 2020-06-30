const minPathSum = require('.')

test('case 1', () => {
    const input = [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]

    expect(minPathSum(input)).toBe(7)
})
