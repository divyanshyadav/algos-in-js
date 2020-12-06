const bestSum = require('.')

test('case 1', () => {
    const actual = bestSum(7, [2, 3, 4])
    const expected = [4, 3]

    expect(actual).toEqual(expected)
})

test('case 2', () => {
    const actual = bestSum(100, [1, 2, 5, 25])
    const expected = [25, 25, 25, 25]

    expect(actual).toEqual(expected)
})

test('case 3', () => {
    const actual = bestSum(8, [2, 3, 5])
    const expected = [5, 3]

    expect(actual).toEqual(expected)
})
