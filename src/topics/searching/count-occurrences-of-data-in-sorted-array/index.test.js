const { countOccurrences, findFirstOccurrence, findLastOccurrence } = require('.')

test('case 1', () => {
    const array = [1, 1, 1, 1, 2, 3, 4, 5]
    expect(countOccurrences(array, 1)).toEqual(4)
})

test('case 2', () => {
    const array = [1, 1, 1, 1]
    expect(countOccurrences(array, 1)).toEqual(4)
})

test('case 3', () => {
    const array = [1, 1, 1, 1, 2]
    expect(countOccurrences(array, 3)).toEqual(0)
})

test('case 4', () => {
    const array = [1, 1, 1, 2, 2, 2, 4]
    expect(findFirstOccurrence(array, 0)).toEqual(-1)
    expect(findFirstOccurrence(array, 2)).toEqual(3)
})

test('case 4', () => {
    const array = [1, 1, 1, 2, 2, 2, 4]
    expect(findLastOccurrence(array, 0)).toEqual(-1)
    expect(findLastOccurrence(array, 2)).toEqual(5)
})

test('case 5', () => {
    const array = [1, 1, 1, 1, 2]
    expect(countOccurrences(array, 2)).toEqual(1)
})
