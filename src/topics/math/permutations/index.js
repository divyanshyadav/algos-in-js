/*
    Time complexity: O(n!)
    Space Complexity; O(n!)

    Note: Duplicates are handled.
*/

const { swap, clone, validators: { checkEmptyArrayArg } } = require('../../../utils')

const permutations = (array) => {
    const map = new Map()

    generate(array, 0, map)

    const list = []
    map.forEach(value => list.push(value))

    return list
}

const generate = (array, start, map) => {
    if (start >= array.length) {
        add(array, map)
        return
    }

    for (let index = start; index < array.length; index++) {
        swap(array, start, index)
        generate(array, start + 1, map)
        swap(array, start, index)
    }
}

const add = (permutation, map) => {
    const value = clone(permutation)
    const key = value.join()

    if (!map.has(key)) {
        map.set(key, value)
    }
}

module.exports = checkEmptyArrayArg(permutations, 0)
