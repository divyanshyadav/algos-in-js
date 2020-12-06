const { canConstruct, canConstructTabulation } = require('.')

test('case 1', () => {
    const actual = canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
    const expected = true

    expect(actual).toBe(expected)
})

test('case 2', () => {
    const actual = canConstruct('aa', ['ab', 'abc', 'cd', 'def', 'abcd'])
    const expected = false

    expect(actual).toBe(expected)
})

test('case 3', () => {
    const actual = canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
    const expected = false

    expect(actual).toBe(expected)
})

test('case 4', () => {
    const actual = canConstruct('', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
    const expected = true

    expect(actual).toBe(expected)
})

test('case 5', () => {
    const actual = canConstructTabulation('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
    const expected = false

    expect(actual).toBe(expected)
})

test('case 6', () => {
    const actual = canConstructTabulation('', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
    const expected = true

    expect(actual).toBe(expected)
})

test('case 1', () => {
    const actual = canConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
    const expected = true

    expect(actual).toBe(expected)
})
