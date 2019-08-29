const { Stack, Queue } = require('data-structures-again')

const inOrder = (node) => {
    const queue = new Queue()
    const stack = new Stack()
    let current = node

    while (true) {
        if (current !== null) {
            stack.push(current)
            current = current.left
        } else if (!stack.empty()) {
            current = stack.pop()
            queue.enqueue(current.data)
            current = current.right
        } else {
            break
        }
    }

    return queue.values()
}

module.exports = inOrder
