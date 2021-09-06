const getTotalNumberOfSequences = require('.')
const { run, Test } = require('../../../utils/testUtils')

const tests = [
    new Test({ args: [10, 4], expected: 4 }),
    new Test({ args: [5, 2], expected: 6 })
]

run(getTotalNumberOfSequences, tests)
