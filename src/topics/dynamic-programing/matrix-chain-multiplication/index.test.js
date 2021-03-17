const { minCost } = require('.')

test('case 1', () => {
    const matrices = [10, 100, 5, 50]
    expect(minCost(matrices)).toBe(7500)
})
