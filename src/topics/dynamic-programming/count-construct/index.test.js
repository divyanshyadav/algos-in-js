const countConstruct = require('.')

test('case 1', () => {
    const actual = countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
    const expected = 1

    expect(actual).toBe(expected)
})

test('case 2', () => {
    const actual = countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
    const expected = 0

    expect(actual).toBe(expected)
})

test('case 3', () => {
    const actual = countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])
    const expected = 2

    expect(actual).toBe(expected)
})
