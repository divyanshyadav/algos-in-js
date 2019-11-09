const countSets = require('.')

test('case 1', () => {
    const input = [2, 4, 6, 10]
    expect(countSets(input, 16)).toBe(2)
})

test('case 2', () => {
    const input = [2, 4, 6, 10]
    expect(countSets(input, 8)).toBe(1)
})
