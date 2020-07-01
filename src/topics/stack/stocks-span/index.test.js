const stockSpan = require('.')

test('case 1', () => {
    const input = []
    const output = []

    expect(stockSpan(input)).toEqual(output)
})

test('case 2', () => {
    const input = [1]
    const output = [1]

    expect(stockSpan(input)).toEqual(output)
})

test('case 3', () => {
    const input = [1, 2]
    const output = [1, 2]

    expect(stockSpan(input)).toEqual(output)
})

test('case 4', () => {
    const input = [2, 1]
    const output = [1, 1]

    expect(stockSpan(input)).toEqual(output)
})

test('case 5', () => {
    const input = [10, 7, 4, 5, 3, 6, 8]
    const output = [1, 1, 1, 2, 1, 4, 6]

    expect(stockSpan(input)).toEqual(output)
})
