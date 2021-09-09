function createTest ({ args = [], expected, name = '' } = {}) {
    return { args, expected, name }
}

/**
 *  fn: Function to be tested
 *  cases: array of Test instance
 **/
const runTestsOn = (fn, tests) => {
    describe('Case  | args | expected', () => {
        tests.forEach((c, idx) => {
            const title = [`${idx}`, `${c.args}`, `${c.expected}`]
            if (c.name) title.push(c.name)

            test(title.join('  '), () => {
                expect(fn(...c.args)).toEqual(c.expected)
            })
        })
    })
}

module.exports = {
    createTest,
    runTestsOn
}
