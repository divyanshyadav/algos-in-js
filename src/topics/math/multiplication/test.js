const multiply = require('./basic')

test('case 0', () => {
    expect(multiply(0, 0)).toBe(0)
    expect(multiply(5, 0)).toBe(0)
})

test('case 1', () => {
    expect(multiply(5, 5)).toBe(25)
})

test('case 2', () => {
    expect(multiply(50, 5)).toBe(250)
})

test('case 3', () => {
    expect(multiply(51, 5)).toBe(255)
})

test('case 4', () => {
    expect(multiply(1234, 5678)).toBe(7006652)
})
