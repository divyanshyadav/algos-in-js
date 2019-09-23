/*
    Find greatest common factor of two numbers
    using Euclidean algorithm
*/

const gcf = (a, b) => {
    let x = a > b ? a : b
    let y = a < b ? a : b

    while (x % y !== 0) {
        x = x % y;
        [x, y] = [y, x]
    }

    return y
}

module.exports = gcf
