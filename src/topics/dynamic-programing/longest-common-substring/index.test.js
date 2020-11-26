const longestCommonSubstring = require('.')

test('case 1', () => {
    const input = ['abc', 'eabcf']
    const output = 3

    expect(longestCommonSubstring(...input)).toBe(output)
})

test('case 2', () => {
    const input = ['abcdgh', 'acdghr']
    const output = 4

    expect(longestCommonSubstring(...input)).toBe(output)
})
