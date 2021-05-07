const { fractionalKnapsack } = require('.')

test('case 1', () => {
    const weights = [30, 20, 10]
    const costs = [120, 100, 60]
    const capacity = 50

    expect(fractionalKnapsack(weights, costs, capacity)).toBe(240)
})
