const secondLargestNode = (root) => {
    let largest = -Infinity
    let secondLargest = -Infinity

    const helper = (root) => {
        if (!root) {
            return
        }

        if (root.data > largest) {
            secondLargest = largest
            largest = root.data
        } else if (root.data > secondLargest) {
            secondLargest = root.data
        }

        helper(root.left)
        helper(root.right)
    }

    helper(root)

    return secondLargest
}

module.exports = secondLargestNode
