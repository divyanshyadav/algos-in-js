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
