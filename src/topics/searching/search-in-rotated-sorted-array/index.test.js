const search = require('.')

test('case 1', () => {
    const array = [4, 5, 6, 0, 1, 2, 3]
    expect(search(array, 3)).toBe(6)
})

test('case 2', () => {
    const array = []
    expect(search(array, 3)).toBe(-1)
})

test('case 3', () => {
    const array = [1]
    expect(search(array, 3)).toBe(-1)
})

test('case 4', () => {
    const array = [1]
    expect(search(array, 1)).toBe(0)
})

test('case 5', () => {
    const array = [1, 2]
    expect(search(array, 2)).toBe(1)
})

test('case 6', () => {
    const array = [4, 5, 6, 7, 0, 1, 2]
    expect(search(array, 0)).toBe(4)
})

test('case 7', () => {
    const array = [5, 1, 3]
    expect(search(array, 5)).toBe(0)
})

test('case 8', () => {
    const array = [8, 9, 2, 3, 4]
    expect(search(array, 9)).toBe(1)
})
