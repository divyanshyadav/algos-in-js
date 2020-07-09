const { BST } = require('data-structures-again')
const construct = require('.')

test('case 1', () => {
    const postOrder = 'cfgdbea'
    const inOrder = 'cbfdgae'
    const tree = construct(postOrder, inOrder)
    const utils = new BST()

    expect(utils.postOrder(tree).join('')).toBe(postOrder)
    expect(utils.inOrder(tree).join('')).toBe(inOrder)
})

test('case 2', () => {
    const postOrder = '42531'
    const inOrder = '42153'
    const tree = construct(postOrder, inOrder)
    const utils = new BST()

    expect(utils.postOrder(tree).join('')).toBe(postOrder)
    expect(utils.inOrder(tree).join('')).toBe(inOrder)
})
