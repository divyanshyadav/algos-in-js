function benchmark (fn, ...args) {
    console.time(fn.name)
    fn(...args)
    console.timeEnd(fn.name)
}

module.exports = {
    benchmark
}
