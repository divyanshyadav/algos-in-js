/*
    time: O(n)
    space: O(n)
*/
function fib (n) {
    const array = new Array(n + 1).fill(0)
    array[1] = 1

    for (let i = 2; i <= n; i++) {
        array[i] = array[i - 1] + array[i - 2]
    }

    return array[n]
}

module.exports = fib
