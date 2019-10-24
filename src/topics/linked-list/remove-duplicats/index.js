const removeDuplicates = (head) => {
    let cur = head
    while (cur !== null) {
        const data = cur.data
        let next = cur.next
        let pre = cur
        while (next !== null) {
            if (next.data === data) {
                pre.next = next.next
                next = pre.next
            } else {
                pre = next
                next = next.next
            }
        }
        cur = cur.next
    }
    return head
}

module.exports = removeDuplicates
