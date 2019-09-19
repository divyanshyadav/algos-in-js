/*
    Time complexity: O(n!)
    Space Complexity; O(n!)

    Note: Duplicates are handled.
*/

const { swap, clone, validators: { checkEmptyArrayArg } } = require('../../../utils')

const permutations = (array) => {
    const map = new Map()
    const add = (permutation) => {
        const value = clone(permutation)
        const key = value.join()

        if (!map.has(key)) {
            map.set(key, value)
        }
    }

    const helper = (array, start) => {
        if (start >= array.length) {
            add(array)
            return
        }

        for (let index = start; index < array.length; index++) {
            swap(array, start, index)
            helper(array, start + 1)
            swap(array, start, index)
        }
    }

    helper(array, 0)

    const list = []
    map.forEach(value => list.push(value))

    return list
}

module.exports = checkEmptyArrayArg(permutations, 0)
