const reverse = (head) => {
    let newHead = null
    let cur = head

    while (cur !== null) {
        const next = cur.next
        const temp = newHead
        newHead = cur
        newHead.next = temp
        cur = next
    }

    return newHead
}

module.exports = reverse
