const secondSmallest = require('.')

test('empty array', () => {
    expect(secondSmallest([])).toEqual(undefined)
})

test('array with one element', () => {
    expect(secondSmallest([1])).toEqual(undefined)
})

test('arry with three elements', () => {
    expect(secondSmallest([2, 2, 1])).toEqual(2)
})

test('arry with three elements', () => {
    expect(secondSmallest([4, 5, 6, 3, 5, 1, 4, 4, 53, 1, 1, 3]))
        .toEqual(1)
})

test('arry with same elements', () => {
    expect(secondSmallest([1, 1, 1, 1]))
        .toEqual(1)
})
