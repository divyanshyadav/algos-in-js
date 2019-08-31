/*
    Morris In-order tree traversal
    Time complexity: O(n)
    Space complexity: O(1)
*/

const print = value => console.log(value)

const inOrder = (node, visit = print) => {
    let cur = node
    while (cur != null) {
        if (cur.left === null) {
            visit(cur.data)
            cur = cur.right
        } else {
            let pre = cur.left
            while (pre.right !== null && pre.right !== cur) {
                pre = pre.right
            }

            if (pre.right === cur) {
                pre.right = null
                visit(cur.data)
                cur = cur.right
            } else {
                pre.right = cur
                cur = cur.left
            }
        }
    }
}

module.exports = inOrder
