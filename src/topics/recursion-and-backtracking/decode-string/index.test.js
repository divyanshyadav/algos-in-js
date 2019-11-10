const decode = require('.')

test('case 1', () => {
    const input = '10'
    const output = [
        'j'
    ]

    expect(decode(input)).toEqual(output)
})

test('case 2', () => {
    const input = '12'
    const output = [
        'ab',
        'l'
    ]

    expect(decode(input)).toEqual(output)
})

test('case 3', () => {
    const input = '01'
    const output = []

    expect(decode(input)).toEqual(output)
})

test('case 4', () => {
    const input = '123'
    const output = [
        'abc',
        'aw',
        'lc'
    ]

    expect(decode(input)).toEqual(output)
})

test('case 5', () => {
    const input = '1234'
    const output = [
        'abcd',
        'awd',
        'lcd'
    ]

    expect(decode(input)).toEqual(output)
})
