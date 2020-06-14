const maxSubarraySum = require('.')

test('case 1', () => {
    const array = [-2, -3, 4, -1, -2, 1, 5, -3]
    expect(maxSubarraySum(array)).toBe(7)
})
