/*
    Time Complexity: O(n)
    Space Complexity: O(h)

    n = total number of nodes
    h = height of the tree
*/

const lca = (node, a, b) => {
    if (node === null) {
        return null
    }

    if (node.data === a || node.data === b) {
        return node.data
    }

    const left = lca(node.left, a, b)
    const right = lca(node.right, a, b)

    return left && right ? node.data : left || right
}

module.exports = lca
