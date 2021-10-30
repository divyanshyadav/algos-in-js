const { zeroOneKnapsack, zeroOneKnapsackUsingDP } = require('.')

describe('1 0 Knapsack using Recursion', () => {
    test('case 1', () => {
        const weights = [10, 20, 30]
        const profits = [60, 100, 120]
        const capacity = 50

        expect(zeroOneKnapsack(weights, profits, capacity)).toEqual([1, 2])
    })

    test('case 2', () => {
        const weights = [10, 20, 30, 10]
        const profits = [60, 100, 120, 130]
        const capacity = 50

        expect(zeroOneKnapsack(weights, profits, capacity)).toEqual([0, 2, 3])
    })
})

describe('1 0 Knapsack using DP', () => {
    test('case 1', () => {
        const weights = [10, 20, 30]
        const profits = [60, 100, 120]
        const capacity = 50

        expect(zeroOneKnapsackUsingDP(weights, profits, capacity)).toEqual([1, 2])
    })

    test('case 2', () => {
        const weights = [10, 20, 30, 10]
        const profits = [60, 100, 120, 130]
        const capacity = 50

        expect(zeroOneKnapsackUsingDP(weights, profits, capacity)).toEqual([0, 2, 3])
    })
})
