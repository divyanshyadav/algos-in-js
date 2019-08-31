const createTreeNode = (data, left = null, right = null) => {
    return {
        data,
        left,
        right
    }
}

const serialize = (node) => {
    const helper = (node) => {
        if (!node) {
            return 'X,'
        }

        return node.data + ',' +
            helper(node.left) +
            helper(node.right)
    }

    return helper(node).slice(0, -1)
}

const deserialize = (string) => {
    const helper = (nodes) => {
        if (!nodes.length) {
            return null
        }

        const node = nodes.shift()

        if (node === 'X') {
            return null
        }

        const leftSubTree = helper(nodes)
        const rightSubTree = helper(nodes)

        return createTreeNode(node, leftSubTree, rightSubTree)
    }

    return helper(string.split(','))
}

module.exports = {
    serialize,
    deserialize
}
