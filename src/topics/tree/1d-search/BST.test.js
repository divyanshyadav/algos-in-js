const { createNode, insertNode, size, rank } = require('./BST')

test('insertion', () => {
    const root = createNode(2)
    insertNode(root, 1)
    insertNode(root, 3)
    insertNode(root, 5)

    expect(root.left.value).toBe(1)
    expect(root.right.value).toBe(3)
    expect(root.right.right.value).toBe(5)
})

test('size', () => {
    const root = createNode(2)
    insertNode(root, 1)
    insertNode(root, 3)
    insertNode(root, 5)

    expect(size(root)).toBe(4)
})

test('rank', () => {
    const root = createNode(2)
    insertNode(root, 1)
    insertNode(root, 3)
    insertNode(root, 6)

    expect(rank(root, 2)).toBe(1)
    expect(rank(root, 3)).toBe(2)
    expect(rank(root, 6)).toBe(3)
    expect(rank(root, 5)).toBe(3)
})
