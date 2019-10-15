const combinations = require('.')

describe('combination', () => {
    test('case 1', () => {
        const input = undefined
        const expectedOutput = []

        const output = combinations(input)

        expect(output).toEqual(expectedOutput)
    })

    test('case 2', () => {
        const input = []
        const expectedOutput = []

        const output = combinations(input)

        expect(output).toEqual(expectedOutput)
    })

    test('case 3', () => {
        const input = ['a']
        const expectedOutput = [
            ['a']
        ]

        const output = combinations(input)

        expect(output).toEqual(expectedOutput)
    })

    test('case 4', () => {
        const input = ['a', 'b']
        const expectedOutput = [
            ['a'],
            ['b'],
            ['a', 'b']
        ]

        const output = combinations(input)
        output.sort()
        output.sort((a, b) => a.length - b.length)

        expect(output).toEqual(expectedOutput)
    })

    test('case 5', () => {
        const input = ['a', 'b', 'c']
        const expectedOutput = [
            ['a'],
            ['b'],
            ['c'],
            ['a', 'b'],
            ['a', 'c'],
            ['b', 'c'],
            ['a', 'b', 'c']
        ]

        const output = combinations(input)
        output.sort()
        output.sort((a, b) => a.length - b.length)

        expect(output).toEqual(expectedOutput)
    })
})
