const HeapStack = require('.')

test('push and pop operation', () => {
    const stack = new HeapStack()
    expect(stack.pop()).toEqual(undefined)
    stack.push(1)

    expect(stack.pop()).toEqual(1)

    stack.push(1)
    stack.push(2)

    expect(stack.pop()).toEqual(2)
})

test('peek operation', () => {
    const stack = new HeapStack()
    stack.push(1)
    stack.push(2)

    expect(stack.peek()).toEqual(2)
})
