function createNode (value, left, right) {
    return {
        value,
        left,
        right,
        count: 1
    }
}

function insertNode (node, value) {
    if (!node) return createNode(value)

    if (value < node.value) {
        node.left = insertNode(node.left, value)
    } else if (value > node.value) {
        node.right = insertNode(node.right, value)
    }

    node.count = 1 + size(node.left) + size(node.right)
    return node
}

function size (node) {
    if (!node) return 0
    return node.count
}

// returns values less that given value
function rank (root, value) {
    if (!root) return 0

    if (value < root.value) {
        return rank(root.left, value)
    } else if (value > root.value) {
        return 1 + size(root.left) + rank(root.right, value)
    } else {
        return size(root.left)
    }
}

module.exports = {
    createNode,
    insertNode,
    size,
    rank
}
