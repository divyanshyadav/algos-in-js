const { Stack } = require('data-structures-again')

/*

FIFO Data Structure

[ Front-Stack ][ Back-Stack ]
[][123]

*/

const createQueue = () => {
    const frontStack = new Stack()
    const backStack = new Stack()

    const moveStacks = () => {
        if (frontStack.empty()) {
            while (!backStack.empty()) {
                frontStack.push(backStack.pop())
            }
        }
    }

    return {
        enqueue: (data) => {
            backStack.push(data)
        },

        peek: () => {
            moveStacks()
            return frontStack.peek()
        },

        dequeue: () => {
            moveStacks()
            return frontStack.pop()
        }
    }
}

module.exports = createQueue
