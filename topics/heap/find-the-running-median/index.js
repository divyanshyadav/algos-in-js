/* 
    Mean = average
    Median = middle element in a sorted array
    Mode = most common number
*/

const { Heap } = require('data-structures-again')

const findMedian = (array) => {
    let firstHalf = new Heap((a, b) => b - a)
    let secondHalf = new Heap()

    // array.
}

module.exports = findMedian