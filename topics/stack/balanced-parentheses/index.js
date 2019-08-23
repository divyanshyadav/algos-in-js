const { Stack } = require('data-structures-again')

const TOKENS = [
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
]

const isOpenTerm = (exp) => TOKENS.find(t => t[0] === exp)

const match = (start, end) => TOKENS.find(t => t[0] === start && t[1] === end)

const isBalanced = (expression) => {
    const stack = new Stack()
    
    expression
        .split('')
        .forEach(c => {
            if (isOpenTerm(c)) {
                stack.push(c)
            } else {
                if (stack.empty() || !match(stack.pop(), c)) {
                    return false
                }
            }
        })

    return stack.empty()
}

module.exports = isBalanced

