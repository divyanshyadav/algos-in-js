const findMedians = require('.')

test('empty array', () => {
    const array = []
    const median = findMedians(array)
    expect(median).toEqual([])
})

test('array of size 1', () => {
    const array = [1]
    const median = findMedians(array)
    expect(median).toEqual([1])
})

test('array of size 2', () => {
    const array = [1, 2]
    const median = findMedians(array)
    expect(median).toEqual([1, 1.5])
})

test('array of size 3', () => {
    const array = [1, 2, 3]
    const median = findMedians(array)
    expect(median).toEqual([1, 1.5, 2])
})

test('array of size n', () => {
    const array = [1, 2, 3, 4, 5]
    const median = findMedians(array)
    expect(median).toEqual([1, 1.5, 2, 2.5, 3])
})
