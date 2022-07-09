const binarySearch = require('../topics/searching/binary-search')
const ternarySearch = require('../topics/searching/ternary-search')
const { benchmark } = require('../utils/benchmarkingUtils')

const N = 10000000
const array = new Array(N + 1).fill(null).map((_, index) => index)

benchmark(binarySearch, array, N)
benchmark(ternarySearch, array, N)
