const addOne = require('.')

test('case 1', () => {
    const input = [1, 2, 3]
    const output = [1, 2, 4]

    expect(addOne(input)).toEqual(output)
})

test('case 2', () => {
    const input = [9, 9, 9]
    const output = [1, 0, 0, 0]

    expect(addOne(input)).toEqual(output)
})

test('case 3', () => {
    const input = []
    const output = [1]

    expect(addOne(input)).toEqual(output)
})

test('case 4', () => {
    const input = [9]
    const output = [1, 0]

    expect(addOne(input)).toEqual(output)
})

test('case 5', () => {
    const input = [8, 9]
    const output = [9, 0]

    expect(addOne(input)).toEqual(output)
})
