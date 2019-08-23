const findDiff = require('.')

test('test case 1', () => {
    const first = 'abcabc'
    const second = 'abc'

    expect(findDiff(first, second)).toEqual(3)
})

test('test case 2', () => {
    const first = 'abbc'
    const second = 'abc'

    expect(findDiff(first, second)).toEqual(1)
})

test('test case 3', () => {
    const first = 'abc'
    const second = 'abc'

    expect(findDiff(first, second)).toEqual(0)
})

test('test case 4', () => {
    const first = 'abc123'
    const second = 'abc'

    expect(findDiff(first, second)).toEqual(3)
})

test('test case 5', () => {
    const first  = 'abc&&*('
    const second = 'abc&'

    expect(findDiff(first, second)).toEqual(3)
})