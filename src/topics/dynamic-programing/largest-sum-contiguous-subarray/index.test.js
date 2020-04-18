const subArray = require('.')

test('case 0', () => {
    const input = undefined
    const expected = undefined

    expect(subArray(input)).toBe(expected)
})

test('case 1', () => {
    const input = []
    const expected = []

    expect(subArray(input)).toEqual(expected)
})

test('case 2', () => {
    const input = [1]
    const actualOutput = subArray(input)
    const expectedOutput = [1]

    expect(actualOutput).toEqual(expectedOutput)
})

test('case 3', () => {
    const input = [1, -2, 3]
    const actualOutput = subArray(input)
    const expectedOutput = [3]

    expect(actualOutput).toEqual(expectedOutput)
})

test('case 4', () => {
    const input = [-1, 2, 3, -3, 2, 1, -2]
    const actualOutput = subArray(input)
    const expectedOutput = [2, 3]

    expect(actualOutput).toEqual(expectedOutput)
})

test('case 5', () => {
    const input = [-2, -3, 4, -1, -2, 1, 5, -3]
    const actualOutput = subArray(input)
    const expectedOutput = [4, -1, -2, 1, 5]

    expect(actualOutput).toEqual(expectedOutput)
})

test('case 6', () => {
    const input = [0, 0, 2, 2, -1, -2]
    const actualOutput = subArray(input)
    const expectedOutput = [2, 2]

    expect(actualOutput).toEqual(expectedOutput)
})
