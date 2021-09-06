const squareRoot = require('.')
const { createTest, runTestsOn } = require('../../../utils/testUtils')

const tests = [
    createTest({ args: [9], expected: 3 }),
    createTest({ args: [16], expected: 4 }),
    createTest({ args: [10], expected: 3 })
]

runTestsOn(squareRoot, tests)
