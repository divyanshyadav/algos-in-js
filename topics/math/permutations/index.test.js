const permutations = require('.')

test('null input', () => {
    const input = null
    const solution = undefined

    expect(permutations(input)).toEqual(solution)
})

test('empty array input', () => {
    const input = []
    const solution = undefined

    expect(permutations(input)).toEqual(solution)
})

test('invalid input', () => {
    const input = 'asd'
    const solution = undefined

    expect(permutations(input)).toEqual(solution)
})

test('permutations of a ', () => {
    const input = ['a']

    // per = 1 = 1

    const solution = [['a']]

    expect(permutations(input)).toEqual(solution)
})

test('permutations of ab', () => {
    const input = ['a', 'b']

    // per = 2 x 1 = 6

    const solution = [['a', 'b'], ['b', 'a']]
    expect(permutations(input)).toEqual(solution)
})

test('permutations of abc ', () => {
    const input = ['a', 'b', 'c']

    // per = 3 x 2 x 1 = 6

    const solution = [
        ['a', 'b', 'c'],
        ['a', 'c', 'b'],
        ['b', 'a', 'c'],
        ['b', 'c', 'a'],
        ['c', 'b', 'a'],
        ['c', 'a', 'b']
    ]

    expect(permutations(input)).toEqual(solution)
})

test('permutations of aa', () => {
    const input = ['a', 'a']
    const solution = [['a', 'a']]
    expect(permutations(input)).toEqual(solution)
})
