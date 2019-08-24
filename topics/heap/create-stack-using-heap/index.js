const { Heap } = require('data-structures-again')

class HeapStack {
    constructor() {
        this.heap = new Heap((a, b) => {
            return b[0] - a[0]
        })
        this.counter = 0
    }

    push(data) {
        this.heap.push([this.counter++, data])
    }

    pop() {
        const data = this.heap.pop()
        return data && data[1]
    }

    peek() {
        const data = this.heap.peek()
        return data && data[1]
    }

    size() {
        return this.heap.length
    }

    isEmpty() {
        return this.heap.length === 0
    }
}

module.exports = HeapStack