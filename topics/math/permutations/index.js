const { Queue } = require('data-structures-again')
const { swap, clone } = require('../../utils')

const permutations = (array) => {
    const queue = new Queue()

    const helper = (array, start) => {
        if (start >= array.length) {
            queue.enqueue(clone(array))
            return
        }

        for (let i = start; i < array.length; i++) {
            swap(array, i, start)
            helper(array, start + 1)
            swap(array, i, start)
        }
    }

    helper(array, 0)

    return queue.values()
}

module.exports = permutations
