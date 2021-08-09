/*
    DFS using stack

    Time complexity: O(n)
    space complexity: O(n)

    n: total no. of nodes in graph
*/

class Node {
    constructor (value) {
        this.children = []
        this.value = value
    }
}

function dfs (root, visit = (node) => console.log(node)) {
    if (!root) return

    const stack = [{ node: root, nextChildIndex: 0 }]
    while (stack.length > 0) {
        // Go as deep as possible from current child
        let cur = stack[stack.length - 1]
        while (cur) {
            if (cur.nextChildIndex < cur.node.children.length) {
                stack.push({
                    node: cur.node.children[cur.nextChildIndex],
                    nextChildIndex: 0
                })
                cur.nextChildIndex++
                cur = stack[stack.length - 1]
            } else {
                cur = null
            }
        }

        // visit the node if no more children left to explore
        const top = stack[stack.length - 1]
        if (top.nextChildIndex === top.node.children.length) {
            visit(top.node)
            stack.pop()
        }
    }
}

module.exports = { Node, dfs }
