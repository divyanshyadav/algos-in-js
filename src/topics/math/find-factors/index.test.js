const factors = require('.')

const sort = (array) => {
    return array.sort((a, b) => a - b)
}

test('case 1', () => {
    const input = 12
    const output = [1, 2, 3, 4, 6, 12]

    expect(sort(factors(input))).toEqual(output)
})

test('case 2', () => {
    const input = 36
    const output = [1, 2, 3, 4, 6, 9, 12, 18, 36]

    expect(sort(factors(input))).toEqual(output)
})

test('case 3', () => {
    const input = 17
    const output = [1, 17]

    expect(sort(factors(input))).toEqual(output)
})
