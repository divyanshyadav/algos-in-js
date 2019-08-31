/*
    Time complexity: O(n!)
    Space Complexity; O(n!)

    Note: Duplicated are handled.
*/

const { swap, clone } = require('../../utils')

const permutations = (array) => {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined
    }

    const map = new Map()

    const add = (array) => {
        const value = clone(array)
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

        for (let i = start; i < array.length; i++) {
            swap(array, start, i)
            helper(array, start + 1)
            swap(array, start, i)
        }
    }

    helper(array, 0)

    const list = []
    map.forEach(value => list.push(value))

    return list
}

module.exports = permutations
