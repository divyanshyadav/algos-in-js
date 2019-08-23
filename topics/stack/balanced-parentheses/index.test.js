const isBalanced = require('.')

test('invalid expression', () => {
    const expression = '[{()'

    expect(isBalanced(expression)).toBeFalsy()
})


test('valid expression', () => {
    const expression = '[{()}]'

    expect(isBalanced(expression)).toBeTruthy()
})