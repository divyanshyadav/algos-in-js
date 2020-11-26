/*
    Time complexity: O(n)
*/
const factorsUsingTrialDivision = (num) => {
    const result = []

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            result.push(i)
        }
    }

    return result
}

/*
    Time complexity: O(n/2)
*/
const factorsUsingTrialDivision2 = (num) => {
    const result = [1, num]

    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            result.push(i)
        }
    }

    return result
}

/*
    Time complexity: O(n^1/2)
*/
const factorsUsingCoPrimes = (num) => {
    const result = []

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            result.push(i)
            const coFactor = num / i
            if (coFactor !== i) {
                result.push(coFactor)
            }
        }
    }

    return result
}

module.exports = factorsUsingTrialDivision
module.exports = factorsUsingTrialDivision2
module.exports = factorsUsingCoPrimes
