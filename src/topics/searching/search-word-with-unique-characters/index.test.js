const isExists = require('.')
const { createTest, runTestsOn } = require('../../../utils/testUtils')

const tests = [
    createTest({ args: ['acb', 'bc'], expected: true }),
    createTest({ args: ['acb', 'de'], expected: false }),
    createTest({ args: ['awesomethingsarethereintheworld', 'lord'], expected: true })
]

runTestsOn(isExists, tests)
