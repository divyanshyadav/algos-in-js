const { findIntersection } = require('.')

test('findIntersection | case 1', () => {
    const intervals = [
        [6, 10], [1, 9], [1, 5],
        [7, 9], [5, 7], [9, 15]
    ]

    const [start, end] = findIntersection(intervals, 0, intervals.length - 1)
    expect(start).toBe(9)
    expect(end).toBe(9)
})

test('findIntersection | case 2', () => {
    const intervals = [
        [15, 50], [0, 14], [1, 4], [2, 8], [3, 12]
    ]

    const [start, end] = findIntersection(intervals, 0, intervals.length - 1)
    expect(start).toBe(3)
    expect(end).toBe(4)
})
