/*
    Time complexity: O(n)
    Space complexity: O(n)
*/

const { Stack } = require('data-structures-again')

const print = value => console.log(value)

const inOrder = (node, visit = print) => {
    const stack = new Stack()
    let current = node

    while (true) {
        if (current !== null) {
            stack.push(current)
            current = current.left
        } else if (!stack.empty()) {
            current = stack.pop()
            visit(current.data)
            current = current.right
        } else {
            break
        }
    }
}

module.exports = inOrder
