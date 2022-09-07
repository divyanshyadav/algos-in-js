const sweepLine = require('.')

describe('orthogonal-line-segment-intersection-search', () => {
    test('case 1', () => {
        const lines = [
            [0, 1, 5, 1],
            [2, 3, 6, 3],
            [4, 4, 4, 2]
        ]
        expect(sweepLine(lines)).toBe(1)
    })

    test('case 2', () => {
        const lines = [
            [0, 1, 5, 1],
            [2, 3, 6, 3],
            [4, 4, 4, 2],
            [3, 2, 3, 3.5]
        ]
        expect(sweepLine(lines)).toBe(2)
    })

    test('case 3', () => {
        const lines = [
            [0, 1, 5, 1],
            [2, 3, 6, 3],
            [4, 2, 4, 4],
            [3, 2, 3, 3.5],
            [6, 2, 6, 4]
        ]
        expect(sweepLine(lines)).toBe(2)
    })
})
