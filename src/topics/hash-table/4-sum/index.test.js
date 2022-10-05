const has4Sum = require('.')

describe('4-sum', () => {
    test('case 1', () => {
        const arr = [1, 2, 3, 1, 2, 3]
        expect(has4Sum(arr)).toBe(true)
    })

    test('case 2', () => {
        const arr = [1, 2, 3, 1]
        expect(has4Sum(arr)).toBe(false)
    })

    test('case 3', () => {
        const arr = [1, 2, 4, -1]
        expect(has4Sum(arr)).toBe(true)
    })
})
