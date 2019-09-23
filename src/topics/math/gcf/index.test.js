const gcf = require('.')

describe('testing gcf', () => {
    test('case 1', () => {
        const input = [5, 25]
        const expectedOutput = 5
        const output = gcf(...input)

        expect(output).toBe(expectedOutput)
    })

    test('case 2', () => {
        const input = [1112, 695]
        const expectedOutput = 139
        const output = gcf(...input)

        expect(output).toBe(expectedOutput)
    })
})
