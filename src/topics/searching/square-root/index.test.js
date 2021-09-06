const squareRoot = require('.')
const { run, Test } = require('../../../utils/testUtils')

const tests = [
    new Test({
        args: [9],
        expected: 3
    }),
    new Test({
        args: [10],
        expected: 3
    }),
    new Test({
        args: [16],
        expected: 4
    })
]

run(squareRoot, tests)
