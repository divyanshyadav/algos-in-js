const calculate = require('.')

describe('combination', () => {
    test('case 1', () => {
        const input = ' 10 +  10 *  100  '
        const expectedOutput = 1010
        const output = calculate(input)

        expect(output).toEqual(expectedOutput)
    })

    test('case 2', () => {
        const input = ' 10 * 10 + 100  '
        const expectedOutput = 200
        const output = calculate(input)

        expect(output).toEqual(expectedOutput)
    })

    test('case 3', () => {
        const input = ''
        const expectedOutput = 0
        const output = calculate(input)

        expect(output).toEqual(expectedOutput)
    })

    test('case 4', () => {
        const input = '10'
        const expectedOutput = 10
        const output = calculate(input)

        expect(output).toEqual(expectedOutput)
    })

    test('case 5', () => {
        const input = '10*'

        expect(() => calculate(input)).toThrow('invalid expression')
    })

    test('case 6', () => {
        const input = '10+10+*10'

        expect(() => calculate(input)).toThrow('invalid expression')
    })

    test('case 7', () => {
        const input = '9.10 + 9.90 * 100'
        const expectedOutput = 999.1
        const output = calculate(input)

        expect(output).toEqual(expectedOutput)
    })
})
