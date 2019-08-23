const hasCycle = require('.')

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

test('with cycle', () => {
    /* 
        1 -> 2 -> 3 -> 4
                  |    |
                  6 <- 5
    */

    const node1 = new Node(1)
    const node2 = new Node(2)
    const node3 = new Node(3)
    const node4 = new Node(4)
    const node5 = new Node(5)
    const node6 = new Node(6)

    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = node6
    node6.next = node3

    expect(hasCycle(node1)).toEqual(true)

})

test('without cycle', () => {
    /* 
        1 -> 2 -> 3 -> 4 -> 5 -> 6
    */

    const node1 = new Node(1)
    const node2 = new Node(2)
    const node3 = new Node(3)
    const node4 = new Node(4)
    const node5 = new Node(5)
    const node6 = new Node(6)

    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = node6

    expect(hasCycle(node1)).toEqual(false)

})