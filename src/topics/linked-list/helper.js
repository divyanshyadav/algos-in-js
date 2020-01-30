function Node (data = null, next = null) {
    this.data = data
    this.next = next
}

function createLinkedListFrom (array) {
    let head = null
    let tail = null

    array.forEach(data => {
        if (head === null) {
            head = new Node(data)
            tail = head
        } else {
            tail.next = new Node(data)
            tail = tail.next
        }
    })

    return head
}

function createArrayFromLinkedList (head) {
    const array = []
    let cur = head
    while (cur !== null) {
        array.push(cur.data)
        cur = cur.next
    }
    return array
}

module.exports = {
    createArrayFromLinkedList,
    createLinkedListFrom
}
