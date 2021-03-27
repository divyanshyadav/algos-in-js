const { partition, sort, sortDesc } = require('.')

test('partition with 1 elements', () => {
    const array = [1]
    expect(partition(array, 0, array.length - 1)).toEqual(0)
})

test('partition with 2 elements', () => {
    const array = [2, 1]
    expect(partition(array, 0, array.length - 1)).toEqual(0)
})

test('partition with 3 elements', () => {
    const array = [2, 3, 1]
    expect(partition(array, 0, array.length - 1)).toEqual(0)
})

test('quick sort', () => {
    const array = [2, 3, 1, 4, 5]
    expect(sort(array)).toEqual([1, 2, 3, 4, 5])
})

test('quick sort with duplicates', () => {
    const array = [2, 2, 2, 1]
    expect(sort(array)).toEqual([1, 2, 2, 2])
})

test('quick sort on sorted array', () => {
    const array = [1, 2, 3, 4]
    expect(sort(array)).toEqual(array)
})

test('quick sort desc', () => {
    const array = [1, 2, 3, 4]
    expect(sortDesc(array)).toEqual([4, 3, 2, 1])
})

test('partition should give mid index if all items are same', () => {
    const array = [1, 1, 1, 1]
    expect(partition(array, 0, array.length - 1)).toBe(1)
})
