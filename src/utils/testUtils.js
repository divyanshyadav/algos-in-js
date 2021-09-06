class Test {
    constructor ({ args = [], expected, name = '' } = {}) {
        this.args = args
        this.expected = expected
        this.name = name
    }
}

/**
 *  fn: Function to be tested
 *  cases: array of Objects(Case)
 **/
const run = (fn, tests) => {
    tests.forEach((c, idx) => {
        const title = [`Case ${idx}`, `in: ${c.args}`, `out: ${c.expected}`]
        if (c.name) title.push(c.name)

        test(title.join(' | '), () => {
            expect(fn(...c.args)).toEqual(c.expected)
        })
    })
}

module.exports = {
    Test,
    run
}
