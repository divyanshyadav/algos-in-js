const sortDesc = require('.')

test('case 1: sort desc', () => {
    const input = [31, 41, 59, 26, 41, 58]
    const output = [59, 58, 41, 41, 31, 26]
    expect(sortDesc(input)).toEqual(output)
})
