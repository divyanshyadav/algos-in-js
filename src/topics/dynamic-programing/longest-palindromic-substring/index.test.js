const longestPalindromicSubstring = require('.')

test('case 1', () => {
    const input = 'babad'
    const output = 'bab'

    expect(longestPalindromicSubstring(input)).toBe(output)
})

test('case 2', () => {
    const input = 'cbbd'
    const output = 'bb'

    expect(longestPalindromicSubstring(input)).toBe(output)
})

test('case 3', () => {
    const input = 'babad'
    const output = 'bab'

    expect(longestPalindromicSubstring(input)).toBe(output)
})
