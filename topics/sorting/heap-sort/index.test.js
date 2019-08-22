const { sort, sinkDown, maxHeapComparator, heapify, minHeapComparator } = require('.')

test('sink down min-heap', () => {
    const array = [3, 2, 1]
    sinkDown(array, 0)
    
    expect(array).toEqual([1, 2, 3])
})

test('sink down max-heap', () => {
    const array = [1, 2, 3]
    sinkDown(array, 0, maxHeapComparator)
    
    expect(array)
        .toEqual([3, 2, 1])
})

test('heapify', () => {
    const array = [3, 2, 1]
    heapify(array)
    
    expect(array).toEqual([1, 2, 3])
})


test('heap sort', () => {
    const array = [2, 3, 1, 4, 5, 7, 8, .05, -1]
    sort(array)
    
    expect(array)
        .toEqual([-1, .05, 1, 2, 3, 4, 5, 7, 8])
})

test('heap sort', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8]
    sort(array, minHeapComparator)
    
    expect(array)
        .toEqual([8, 7, 6, 5, 4, 3, 2, 1])
})


test('sort array of 1 element', () => {
    const array = [1]
    sort(array)
    
    expect(array)
        .toEqual([1])
})