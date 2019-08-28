const find = require('.')

test('case 0', () => {
    const ap = [1]
    expect(find(ap)).toEqual(undefined)
})

test('case 0', () => {
    const ap = [1, 3]
    expect(find(ap)).toEqual(2)
})

test('case 1', () => {
    const ap = [1, 2, 4]
    expect(find(ap)).toEqual(3)
})

test('case 2', () => {
    const ap = [1, 2, 3, 5]
    expect(find(ap)).toEqual(4)
})

test('case 3', () => {
    const ap = [1, 2, 3, 5, 6, 7]
    expect(find(ap)).toEqual(4)
})

test('case 4', () => {
    const ap = [1, 2, 3, 4, 6, 7]
    expect(find(ap)).toEqual(5)
})

test('case 6', () => {
    const ap = [1, 3, 5, 9, 11]
    expect(find(ap)).toEqual(7)
})

test('case 7', () => {
    const ap = [1, 6, 11, 16, 21, 31]
    expect(find(ap)).toEqual(26)
})

test('case 8', () => {
    const ap = [2, 4, 8, 10, 12, 14]
    expect(find(ap)).toEqual(6)
})

test('case 9 | desc', () => {
    const ap = [3, 1]
    expect(find(ap)).toEqual(2)
})

test('case 10 | desc', () => {
    const ap = [10, 8, 4, 2]
    expect(find(ap)).toEqual(6)
})
