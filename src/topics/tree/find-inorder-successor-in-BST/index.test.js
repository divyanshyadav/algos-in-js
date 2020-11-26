
const inOrderSuccessor = require('.')
const { BST } = require('data-structures-again/src/tree')

test('case 1', () => {
    const bst = new BST()
    bst.insert(10)
    bst.insert(5)
    bst.insert(20)
    bst.insert(30)

    /*
            10
        5       20
                    30
    */

    const node = inOrderSuccessor(bst.root, 20)

    expect(node.data).toBe(30)
})

test('case 2', () => {
    const bst = new BST()
    bst.insert(10)
    bst.insert(5)
    bst.insert(20)
    bst.insert(30)
    bst.insert(2)

    /*
                10
            5       20
        2              30
    */

    const node = inOrderSuccessor(bst.root, 2)

    expect(node.data).toBe(5)
})

test('case 3', () => {
    const bst = new BST()
    bst.insert(10)
    bst.insert(5)
    bst.insert(20)
    bst.insert(30)
    bst.insert(2)
    bst.insert(9)

    /*
                 10
            5        20
        2      9        30
    */

    const node = inOrderSuccessor(bst.root, 9)

    expect(node.data).toBe(10)
})
