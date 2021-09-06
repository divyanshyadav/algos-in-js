const getTotalNumberOfSequences = require('.')
const { createTest, runTestsOn } = require('../../../utils/testUtils')

const tests = [
    createTest({ args: [10, 4], expected: 4 }),
    createTest({ args: [5, 2], expected: 6 })
]

runTestsOn(getTotalNumberOfSequences, tests)
