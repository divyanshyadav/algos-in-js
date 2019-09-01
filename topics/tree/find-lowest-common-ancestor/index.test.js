const { BST } = require('data-structures-again')
const lca = require('.')

test('case 1', () => {
    const tree = new BST()
    Array.from([5, 3, 10]).forEach(k => tree.insert(k))

    expect(lca(tree.root, 5, 10)).toEqual(5)
})

test('case 2', () => {
    const tree = new BST()
    Array.from([5, 3, 10, 1, 4]).forEach(k => tree.insert(k))

    /*
            5
        3       10
    1      4

    */

    expect(lca(tree.root, 1, 4)).toEqual(tree.lca(1, 4).data)
})

test('case 3', () => {
    const tree = new BST()
    Array.from([5, 3, 10, 1, 4]).forEach(k => tree.insert(k))

    /*
            5
        3       10
    1      4

    */

    expect(lca(tree.root, 1, 10)).toEqual(5)
})

test('case 4', () => {
    const tree = new BST()
    Array.from([5, 3, 10, 1, 4, 20]).forEach(k => tree.insert(k))

    /*
             5
        3        10
    1      4        20

    */

    expect(lca(tree.root, 4, 20)).toEqual(5)
})

test('case 5', () => {
    const tree = new BST()
    Array.from([5, 3, 10, 1, 4, 20]).forEach(k => tree.insert(k))

    /*
             5
        3        10
    1      4        20

    */

    expect(lca(tree.root, 4, 0)).toEqual(4)
})

test('case 6', () => {
    const tree = new BST()
    Array.from([5, 3, 10, 1, 4, 20]).forEach(k => tree.insert(k))

    /*
             5
        3        10
    1      4        20

    */

    expect(lca(tree.root, 3, 4)).toEqual(3)
})
