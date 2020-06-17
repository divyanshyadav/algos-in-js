const maxSubarraySum = require('.')

test('case 0', () => {
    const array = []
    expect(maxSubarraySum(array)).toBe(-Infinity)
})

test('case 1', () => {
    const array = [1]
    expect(maxSubarraySum(array)).toBe(1)
})

test('case 2', () => {
    const array = [-1, 2]
    expect(maxSubarraySum(array)).toBe(2)
})

test('case 4', () => {
    const array = [-1, 2, 3]
    expect(maxSubarraySum(array)).toBe(5)
})

test('case 5', () => {
    const array = [3, -2, 5, -1]
    expect(maxSubarraySum(array)).toBe(6)
})

test('case 6', () => {
    const array = [-2, -3, 4, -1, -2, 1, 5, -3]
    expect(maxSubarraySum(array)).toBe(7)
})
