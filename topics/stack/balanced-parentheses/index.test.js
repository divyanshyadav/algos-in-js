const isBalanced = require('.')

test('empty expression', () => {
    expect(isBalanced(''))
        .toBeTruthy()
})

test('invalid expression', () => {
    const expression = '[{()'

    expect(isBalanced(expression))
        .toBeFalsy()
})

test('valid expression', () => {
    const expression = '[{()}]'

    expect(isBalanced(expression))
        .toBeTruthy()
})