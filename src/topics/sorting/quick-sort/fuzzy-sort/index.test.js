const { findIntersection, partitionRight, partitionLeftMid, fuzzySort } = require('.')

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

test('partitionRight | case 1', () => {
    const intervals = [
        [8, 9],
        [3, 5], [4, 7],
        [1, 2]
    ]

    const index = partitionRight(intervals, 0, intervals.length - 1, 4)
    expect(index).toBe(2)
})

test('partitionLeftMid | case 1', () => {
    const intervals = [[3, 5], [4, 7], [1, 2], [8, 9]]

    const index = partitionLeftMid(intervals, 0, 2, 5)
    expect(index).toBe(0)
})

test('fuzzy sort', () => {
    const intervals = [
        [8, 9],
        [3, 5], [1, 2],
        [4, 7]
    ]

    fuzzySort(intervals)
    expect(intervals).toEqual([[1, 2], [4, 7], [3, 5], [8, 9]])
})
