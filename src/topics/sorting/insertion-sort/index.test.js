const { sortAcc, sortDesc } = require('.')

test('case 1: sort desc', () => {
    const input = [31, 41, 59, 26, 41, 58]
    const output = [59, 58, 41, 41, 31, 26]
    expect(sortDesc(input)).toEqual(output)
})

test('case 2: sort acc', () => {
    const input = [5, 4, 3, 2, 1]
    const output = [1, 2, 3, 4, 5]
    expect(sortAcc(input)).toEqual(output)
})
