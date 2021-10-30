const canSum = require('.')

test('case 1', () => {
    const actual = canSum(7, [5, 3, 4])
    const expected = true

    expect(actual).toBe(expected)
})

test('case 2', () => {
    const actual = canSum(300, [7, 14])
    const expected = false

    expect(actual).toBe(expected)
})
