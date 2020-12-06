const { howSum, howSumTabulation } = require('.')

test('case 1', () => {
    const acutal = howSum(7, [2, 3, 4])
    const expected = [3, 2, 2]
    expect(acutal).toEqual(expected)
})

test('case 2', () => {
    const acutal = howSum(8, [2, 3, 5])
    const expected = [2, 2, 2, 2]
    expect(acutal).toEqual(expected)
})

test('case 3', () => {
    const acutal = howSumTabulation(7, [2, 3, 4])
    const expected = [4, 3]
    expect(acutal).toEqual(expected)
})

test('case 4', () => {
    const acutal = howSumTabulation(8, [2, 3, 5])
    const expected = [5, 3]
    expect(acutal).toEqual(expected)
})

test('case 5', () => {
    const acutal = howSumTabulation(7, [5, 3])
    const expected = null
    expect(acutal).toEqual(expected)
})

test('case 6', () => {
    const acutal = howSum(7, [5, 3])
    const expected = null
    expect(acutal).toEqual(expected)
})
