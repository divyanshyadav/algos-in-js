const select = require('.')

test('get 0th sorted value', () => {
    const array = [5, 4, 3, 2, 1]

    expect(select(array, 0)).toEqual(1)
})

test('get 2nd index sorted value', () => {
    const array = [5, 4, 3, 2, 1]
    expect(select(array, 2)).toEqual(3)
})

test('get 3nd sorted value', () => {
    const array = [5, 4, 3, 2, 1]
    expect(select(array, 3)).toEqual(4)
})
