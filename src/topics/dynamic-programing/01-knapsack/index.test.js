const calculate = require('.')

test('case 1', () => {
    const weights = [10, 20, 30]
    const costs = [60, 100, 120]
    const capacity = 50

    expect(calculate(weights, costs, capacity)).toBe(220)
})
