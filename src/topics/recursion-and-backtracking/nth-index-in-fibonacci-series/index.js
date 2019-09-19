/*
    Fibonacci series
    0, 1, 1, 2, 3, 5 ...

*/

// using memoization technique to store already computed values.
const memo = new Map()

const fib = (n) => {
    if (n <= 0) { return 0 }
    if (n === 1) { return 1 }

    if (!memo.has(n)) {
        memo.set(n, fib(n - 1) + fib(n - 2))
    }

    return memo.get(n)
}

module.exports = fib
