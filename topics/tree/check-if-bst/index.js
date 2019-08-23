/*
    Time Complexity: O(n)
    Space Complexity(Recursive): O(n) is normal tree
                      O(log n) if Balanced Binary tree
*/

const isBST = (root) => {
    const helper = (root, min, max) => {
        if (root === null) {
            return true
        }

        if (root.data < min) {
            return false
        }

        if (root.data > max) {
            return false
        }
        
        return helper(root.left, min, root.data) &&
            helper(root.right, root.data, max)
    }

    return helper(root, -Infinity, +Infinity)
}


module.exports = isBST