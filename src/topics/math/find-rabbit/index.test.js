const findRabbitSol1 = require('./solution-1')
const findRabbitSol2 = require('./solution-2')
const { createTest, runTestsOn } = require('../../../utils/testUtils')

const tests = [
    createTest({ args: [4, 3], expected: 2 })
]

runTestsOn(findRabbitSol1, tests)
runTestsOn(findRabbitSol2, tests)
