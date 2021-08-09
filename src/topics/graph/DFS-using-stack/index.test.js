const dfs = require('.')

class Node {
    constructor (data) {
        this.children = []
        this.data = data
    }
}

test('case 1', () => {
    const root = new Node(1)
    root.children = [new Node(2), new Node(3), new Node(4)]
    root.children[0].children = [new Node(5)]

    const result = []
    dfs(root, node => result.push(node.data))
    expect(result).toEqual([5, 2, 3, 4, 1])
})

test('case 2', () => {
    const root = null

    const result = []
    dfs(root, node => result.push(node.data))
    expect(result).toEqual([])
})

test('case 3', () => {
    const root = new Node(1)

    const result = []
    dfs(root, node => result.push(node.data))
    expect(result).toEqual([1])
})
