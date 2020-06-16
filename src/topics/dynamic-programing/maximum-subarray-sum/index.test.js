const maxSubarraySum = require('.')

test('case 1', () => {
    const array = [-2, -3, 4, -1, -2, 1, 5, -3]
    expect(maxSubarraySum(array)).toBe(7)
})

test('case 2', () => {
    const array = [3, -2, 5, -1]
    expect(maxSubarraySum(array)).toBe(6)
})
