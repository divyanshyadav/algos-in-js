const isBST = require('.')
const { BST } = require('data-structures-again')

class Node {
    constructor(data) {
        this.left = null
        this.data = data
        this.right = null
    }
}

test('valid BST', () => {
    /* 
        50
    10      100
        20      200
    */

    const bst = new BST()
    bst.insert(50)
    bst.insert(10)
    bst.insert(100)
    bst.insert(20)
    bst.insert(200)

    expect(isBST(bst.search(50))).toEqual(true)
})

test('invalid BST', () => {
    /* 
        50
    10      100
      300      200
    */

    const root = new Node(50)
    const node2 = new Node(10)
    const node3 = new Node(100)
    const node4 = new Node(300)
    const node5 = new Node(200)

    root.left = node2
    root.right = node3

    node2.right = node4

    node3.right = node5


    expect(isBST(root)).toEqual(false)
})

test('invalid BST', () => {
    /* 
        50
    10      40
    */

    const root = new Node(50)
    const node2 = new Node(10)
    const node3 = new Node(40)

    root.left = node2
    root.right = node3


    expect(isBST(root)).toEqual(false)
})