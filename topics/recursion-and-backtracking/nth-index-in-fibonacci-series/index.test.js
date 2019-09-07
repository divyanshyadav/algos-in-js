
const fib = require('.')

test('number at index 0', () => {
    expect(fib(0)).toEqual(0)
})

test('number at index 1', () => {
    expect(fib(1)).toEqual(1)
})

test('number at index 2', () => {
    expect(fib(2)).toEqual(1)
})

test('number at index 3', () => {
    expect(fib(3)).toEqual(2)
})

test('number at index 4', () => {
    expect(fib(4)).toEqual(3)
})
