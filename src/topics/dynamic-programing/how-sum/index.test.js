const howSum = require('.')

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