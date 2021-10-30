const { bestSum, bestSumTabulation } = require('.')

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

test('case 4', () => {
    const actual = bestSum(1, [2, 3, 5])
    const expected = null

    expect(actual).toEqual(expected)
})

test('case 5', () => {
    const actual = bestSumTabulation(1, [2, 3, 5])
    const expected = null

    expect(actual).toEqual(expected)
})

test('case 6', () => {
    const actual = bestSumTabulation(8, [2, 3, 5])
    const expected = [3, 5]

    expect(actual).toEqual(expected)
})
