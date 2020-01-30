const { clone } = require('../../../utils/index')

const combinations = (array = []) => {
    const result = []
    const buffer = []

    const helper = (array, start) => {
        if (start >= array.length) {
            return
        }

        for (let i = start; i < array.length; i++) {
            buffer.push(array[i])
            result.push(clone(buffer))
            helper(array, i + 1)
            buffer.pop()
        }
    }

    helper(array, 0)
    return result
}

const combinations2 = (array = []) => {
    const result = []

    const helper = (array, buffer, i) => {
        if (i >= array.length) {
            result.push(clone(buffer))
            return
        }

        // include this item
        buffer.push(array[i])
        helper(array, buffer, i + 1)

        // dont include this item
        buffer.pop()
        helper(array, buffer, i + 1)
    }

    helper(array, [], 0)

    // excluding null set
    return result.slice(0, -1)
}

module.exports = combinations2
