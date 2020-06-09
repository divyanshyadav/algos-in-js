const secondLargestNode = require('.')
const { BST } = require('data-structures-again')

test('case 1', () => {
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

    expect(secondLargestNode(bst.root)).toBe(100)
})

test('case 2', () => {
    /*
            200
        50
    10
    */

    const bst = new BST()
    bst.insert(200)
    bst.insert(201)
    bst.insert(10)

    expect(secondLargestNode(bst.root)).toBe(200)
})
