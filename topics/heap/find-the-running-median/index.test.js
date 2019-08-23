const findMedian = require('.')

test.skip('array of size 1', () => {
    const array = [1]
    const median = findMedian(array)
    expect(median).toEqual(1)
})

test.skip('array of size 2', () => {
    const array = [1, 2]
    const median = findMedian(array)
    expect(median).toEqual(1.5)
})

test.skip('array of size 3', () => {
    const array = [1, 2, 3]
    const median = findMedian(array)
    expect(median).toEqual(2)
})