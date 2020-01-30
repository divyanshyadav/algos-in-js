const { BST, Queue } = require('data-structures-again')
const shuffle = require('../../math/shuffle')
const inOrder = require('.')

test('in-order traversal', () => {
    const items = Array.from(Array(10).keys())
    shuffle(items)

    const bst = new BST()
    items.forEach(item => bst.insert(item))

    const nodes = new Queue()
    inOrder(bst.root, v => nodes.enqueue(v))

    expect(nodes.toArray())
        .toEqual(bst.inOrder())
})
