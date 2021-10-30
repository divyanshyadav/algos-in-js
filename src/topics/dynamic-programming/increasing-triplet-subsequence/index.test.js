const increasingTriplet = require('.')

test('case 1', () => {
    const input = []
    const actual = increasingTriplet(input)
    const expected = false

    expect(actual).toBe(expected)
})

test('case 2', () => {
    const input = [1, 2, 3]
    const actual = increasingTriplet(input)
    const expected = true

    expect(actual).toBe(expected)
})

test('case 3', () => {
    const input = [1, -1, 2]
    const actual = increasingTriplet(input)
    const expected = false

    expect(actual).toBe(expected)
})

test('case 3', () => {
    const input = [1, -1, 2, -1, 3]
    const actual = increasingTriplet(input)
    const expected = true

    expect(actual).toBe(expected)
})

test('case 4', () => {
    const input = [1, -1, 2, -1, -2]
    const actual = increasingTriplet(input)
    const expected = false

    expect(actual).toBe(expected)
})

test('case 5', () => {
    const input = [2, 5, 3, 4, 5]
    const actual = increasingTriplet(input)
    const expected = true

    expect(actual).toBe(expected)
})

test('case 6', () => {
    const input = [2, 1, 5, 0, 4, 6]
    const actual = increasingTriplet(input)
    const expected = true

    expect(actual).toBe(expected)
})

test('case 7', () => {
    const input = [2, 1, 5, 0, 3]
    const actual = increasingTriplet(input)
    const expected = false

    expect(actual).toBe(expected)
})

test('case 8', () => {
    const input = [1, 1, 1, 1, 1]
    const actual = increasingTriplet(input)
    const expected = false

    expect(actual).toBe(expected)
})
