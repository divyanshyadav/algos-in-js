const { BST } = require('data-structures-again')
const shuffle = require('../../shuffle')
const inOrder = require('.')

test('in-order traversal', () => {
    const items = Array.from(Array(10).keys())
    shuffle(items)

    const bst = new BST()
    items.forEach(item => bst.insert(item))

    expect(inOrder(bst.root))
        .toEqual(bst.inOrder())
})
