const { partition, sort, sortDesc, hoarPartition, quickSortUsingHoarPartition, threeWayPartition, threeWayQuickSort, tailRecursiveQuickSort } = require('.')

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

test('hoare partition', () => {
    const array = [13, 19, 9, 5, 12, 8, 7, 4, 11, 2, 6, 21]
    const index = hoarPartition(array, 0, array.length - 1)
    expect(array).toEqual(
        [6, 2, 9, 5, 12, 8, 7, 4, 11, 19, 13, 21]
    )
    expect(index).toBe(8)
})

test('quick sort using hoare partition', () => {
    const array = [13, 19, 9, 5, 12, 8, 7, 4, 11, 2, 6, 21]
    quickSortUsingHoarPartition(array)
    expect(array).toEqual(array.sort())
})

test('quick sort using hoare partition', () => {
    const array = [13, 14]
    quickSortUsingHoarPartition(array)
    expect(array).toEqual(array.sort())
})

test('3-way partition', () => {
    const array = [2, 3, 1, 2, 1, 2]
    const expected = [1, 1, 2, 2, 2, 3]
    const [start, end] = threeWayPartition(array, 0, array.length - 1)

    expect(array).toEqual(expected)
    expect(start).toBe(2)
    expect(end).toBe(4)
})

test('3-way partition quick sort', () => {
    const array = [13, 19, 19, 19, 12, 8, 8, 4, 11, 8, 6, 21]
    threeWayQuickSort(array)
    expect(array).toEqual(array.sort())
})

test('tail recursive quick sort', () => {
    const array = [13, 19, 9, 5, 12, 8, 7, 4, 11, 2, 6, 21]
    tailRecursiveQuickSort(array)
    expect(array).toEqual(array.sort())
})
