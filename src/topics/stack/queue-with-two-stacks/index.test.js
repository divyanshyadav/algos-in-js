const createQueue = require('.')

test('empty queue', () => {
    const queue = createQueue()
    expect(queue.peek()).toBeNull()
    expect(queue.dequeue()).toBeUndefined()
    expect(queue.dequeue()).toBeUndefined()
})

test('enqueue and peek operations', () => {
    const queue = createQueue()
    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.peek()).toEqual(1)
})

test('dequeue operation', () => {
    const queue = createQueue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.dequeue()).toEqual(1)
    expect(queue.peek()).toEqual(2)
    expect(queue.dequeue()).toEqual(2)
    expect(queue.dequeue()).toEqual(3)
})

test('custom test 1', () => {
    const queue = createQueue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.dequeue()).toEqual(1)
    expect(queue.peek()).toEqual(2)
    // [2 3]
    queue.enqueue(1)
    // [2 3 1]
    expect(queue.dequeue()).toEqual(2)
    // [3 1]
    expect(queue.dequeue()).toEqual(3)
    // [1]
    expect(queue.dequeue()).toEqual(1)
})
