const { BST } = require('data-structures-again')
const { serialize, deserialize } = require('.')

test('null cases', () => {
    expect(serialize(null)).toEqual('X')
    expect(deserialize('X')).toEqual(null)
})

test('serialize operation', () => {
    const tree = new BST()
    Array.from([2, 1, 3]).forEach(k => tree.insert(k))

    const expectedOutput = '2,1,X,X,3,X,X'
    expect(serialize(tree.root)).toEqual(expectedOutput)
})

test('deserialize operation', () => {
    const input = '2,1,X,X,3,X,X'
    const tree = deserialize(input)

    expect(tree.data).toEqual('2')

    expect(tree.left.data).toEqual('1')
    expect(tree.left.left).toEqual(null)
    expect(tree.left.right).toEqual(null)

    expect(tree.right.data).toEqual('3')
    expect(tree.right.left).toEqual(null)
    expect(tree.right.right).toEqual(null)
})
