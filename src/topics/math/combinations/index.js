const { clone } = require('../../../utils/index')

const combinations = (array = []) => {
    const result = []
    const buffer = []

    const helper = (array, start) => {
        if (start > array.length - 1) {
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

module.exports = combinations
