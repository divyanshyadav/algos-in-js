
const operations = {
    '/': function (a, b) { return a / b },
    '*': function (a, b) { return a * b },
    '-': function (a, b) { return a - b },
    '+': function (a, b) { return parseFloat(a) + parseFloat(b) }
}

function calculate (string) {
    if (!string) return 0
    const tokens = getTokens(removeSpaces(string))
    const operatorStack = []
    const numberStack = []

    function evaluate () {
        const op = operatorStack.pop()
        const num2 = numberStack.pop()
        const num1 = numberStack.pop()
        const value = operations[op](num1, num2)
        if (Number.isNaN(value)) throw new Error('invalid expression')
        numberStack.push(value)
    }

    const operators = Object.keys(operations)
    tokens.forEach(token => {
        const lastOperator = operatorStack[operatorStack.length - 1]
        while (operatorStack.length > 0 &&
            operators.includes(token) &&
            operators.indexOf(lastOperator) < operators.indexOf(token)) {
            evaluate()
        }

        if (operators.includes(token)) {
            operatorStack.push(token)
        } else {
            numberStack.push(token)
        }
    })

    while (operatorStack.length > 0) {
        evaluate()
    }

    return numberStack.pop()
}

function removeSpaces (string) {
    const newString = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') continue
        newString.push(string[i])
    }

    return newString.join('')
}

function getTokens (string) {
    const tokens = []

    let token = ''
    for (let i = 0; i < string.length; i++) {
        if (Object.keys(operations).includes(string[i])) {
            tokens.push(parseFloat(token))
            tokens.push(string[i])
            token = ''
        } else {
            token += string[i]
        }
    }

    if (token.length > 0) tokens.push(parseFloat(token))

    return tokens
}

module.exports = calculate
