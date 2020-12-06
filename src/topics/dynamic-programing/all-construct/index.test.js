const countConstruct = require('.')

test('case 1', () => {
    const actual = countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
    const expected = [['abc', 'def']]
    expect(actual).toEqual(expected)
})

test('case 2', () => {
    const actual = countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
    const expected = []

    expect(actual).toEqual(expected)
})

test('case 3', () => {
    const actual = countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])
    const expected = [
        ['purp', 'le'],
        ['p', 'ur', 'p', 'le']
    ]

    expect(actual).toEqual(expected)
})

test('case 3', () => {
    const actual = countConstruct('', ['purp', 'p', 'ur', 'le', 'purpl'])
    const expected = [[]]

    expect(actual).toEqual(expected)
})

test('case 4', () => {
    const actual = countConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaaaa'])
    const expected = []

    expect(actual).toEqual(expected)
})
