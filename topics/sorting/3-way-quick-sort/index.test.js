const { partition, sort } = require('.')

test('3-way partitioning algo', () => {
    const array = [2, 1, 2, 3, 1, 3]
    expect(partition(array, 0, array.length - 1))
        .toEqual({ gt: 3, lt: 2 })
})


test('3-way partitioning quick sort', () => {
    const array = [2, 1, 2, 3, 1, 3, 5, 5]
    expect(sort(array))
        .toEqual([1, 1, 2, 2, 3, 3, 5, 5])
})
