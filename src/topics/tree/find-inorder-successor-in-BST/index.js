const findNode = (root, key) => {
    if (!root) {
        return null
    }

    if (root.data === key) {
        return root
    }

    if (key < root.data) {
        return findNode(root.left, key)
    }

    return findNode(root.right, key)
}

const findMin = (root) => {
    if (!root) {
        return null
    }

    if (root.left === null) {
        return root
    }

    return findMin(root.left)
}

const inOrderSuccessor = (root, key) => {
    const node = findNode(root, key)
    if (!node) return null

    if (node.right) {
        return findMin(node.right)
    }

    let successor = null
    let pointer = root

    while (pointer) {
        if (key < pointer.data) {
            successor = pointer
            pointer = pointer.left
        } else {
            pointer = pointer.right
        }
    }

    return successor
}

module.exports = inOrderSuccessor
