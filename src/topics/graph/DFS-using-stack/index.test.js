const dfs = require('.')

class TreeNode {
    constructor (data) {
        this.left = null
        this.right = null
        this.data = data
    }
}

test('case 1', () => {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(4)
    root.left.left = new TreeNode(3)

    const result = []
    dfs(root, node => result.push(node.data))
    expect(result).toEqual([3, 2, 1, 4])
})
