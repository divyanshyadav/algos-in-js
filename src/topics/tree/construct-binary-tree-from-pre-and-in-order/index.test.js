const { BST } = require('data-structures-again')
const construct = require('.')

test('case 1', () => {
    const preOrder = 'abcdfge'
    const inOrder = 'cbfdgae'
    const tree = construct(preOrder, inOrder)
    const utils = new BST()

    expect(utils.preOrder(tree).join('')).toBe(preOrder)
    expect(utils.inOrder(tree).join('')).toBe(inOrder)
})

test('case 2', () => {
    const preOrder = '12435'
    const inOrder = '42153'
    const tree = construct(preOrder, inOrder)
    const utils = new BST()

    expect(utils.preOrder(tree).join('')).toBe(preOrder)
    expect(utils.inOrder(tree).join('')).toBe(inOrder)
})
