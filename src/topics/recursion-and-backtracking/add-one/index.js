/*
    A function that adds one to an array and retuns a new array
    eg. [1, 2, 3] -> [1, 2, 4]
    eg. [9] -> [1, 0]
*/

const addOne = (array) => {
    const helper = (array, end) => {
        if (end < 0) {
            array.unshift(1)
            return
        }

        const sum = array[end] + 1
        if (sum > 9) {
            array[end] = 0
            helper(array, end - 1)
        } else {
            array[end] = sum
        }
    }

    const copy = array.map(e => e)

    helper(copy, array.length - 1)

    return copy
}

module.exports = addOne
