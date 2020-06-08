
function getArray (num) {
    const array = []

    while (num > 0) {
        array.push(num % 10)
        num = Math.floor(num / 10)
    }

    return array
}

function pow (a, b) {
    let total = 1

    while (b > 0) {
        total *= a
        b--
    }

    return total
}

function multi (a, b) {
    let total = 0

    while (b > 0) {
        total += a
        b--
    }

    return total
}

/*
    time complexity: O(n^2)
    space complexity: O(n)
*/

function multiply (a = 0, b = 0) {
    const aArray = getArray(a)
    const bArray = getArray(b)

    let first = aArray
    let second = bArray

    if (first.length < second.length) {
        first = bArray
        second = aArray
    }

    let sum = 0
    let carry = 0

    second.forEach((s, i) => {
        let localSum = 0

        first.forEach((f, j) => {
            const num = multi(s, f)
            localSum += multi(pow(10, j), ((num + carry) % 10))
            carry = parseInt((num + carry) / 10)
        })

        sum += multi(pow(10, i), localSum)
    })

    if (carry > 0) {
        sum += multi(pow(10, first.length), carry)
    }

    return sum
}

module.exports = multiply
