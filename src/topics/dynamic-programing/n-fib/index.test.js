const fib = require('.')

test('case 1', () => {
    const actual = fib(4)
    const expected = 3

    expect(actual).toBe(expected)
})

test('case 2', () => {
    const actual = fib(9)
    const expected = 34

    expect(actual).toBe(expected)
})
