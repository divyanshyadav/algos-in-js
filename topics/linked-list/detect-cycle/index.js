const hasCycle = (head) => {
    let slow = head
    let fast = head

    while (slow !== null && fast !== null) {
        slow = slow.next
        
        if (fast.next.next === null) {
            break
        }
        fast = fast.next.next

        if (slow === fast) {
            return true
        }
    }

    return false
}

module.exports = hasCycle