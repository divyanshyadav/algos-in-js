/* 
    Mean = average
    Median = middle element in a sorted array
    Mode = most common number
*/

const { Heap } = require('data-structures-again')

const findMedians = (array) => {
    const firstHalf = new Heap((a, b) => b - a) // max-heap
    const secondHalf = new Heap() // min-heap

    const getBiggerAndSmallerHeap = () => {
        const bigger = firstHalf.length > secondHalf.length ? firstHalf : secondHalf
        const smaller = firstHalf.length > secondHalf.length ? secondHalf : firstHalf
        
        return {
            bigger,
            smaller
        }
    }

    const add = (data) => {
        if (firstHalf.length === 0 || firstHalf.peek() > data) {
            firstHalf.push(data)
        } else {
            secondHalf.push(data)
        }
    }

    const reBalance = () => {
        const { bigger, smaller } = getBiggerAndSmallerHeap()
 
         if (bigger.length - smaller.length >= 2) {
             smaller.push(bigger.pop())
         }
    }

    const getMedian = () => {
        const { bigger, smaller } = getBiggerAndSmallerHeap()

        if (bigger.length === smaller.length) {
            return (bigger.peek() + smaller.peek()) / 2
        }
        
        return bigger.peek()
    }

    const medians = array.map(data => {
        add(data)
        reBalance()
        return getMedian()
    })

    return medians

}

module.exports = findMedians