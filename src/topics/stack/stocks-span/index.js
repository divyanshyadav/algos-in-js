const { Stack } = require('data-structures-again')

/*
    Solution 1: without using stack

    Time complexity: O(n^2)
    Space complexity: O(n)
*/
const stockSpan = (array) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
        let sum = 0
        for (let j = i; j >= 0; j--) {
            if (array[j] <= array[i]) {
                sum += 1
            } else {
                break
            }
        }
        result.push(sum)
    }

    return result
}

/*
    Solution 2: with using stack

    Time complexity: O(n)
    Space complexity: O(n)
*/
const stockSpan2 = (array) => {
    const stack = new Stack()
    const result = []

    array.forEach((item, i) => {
        while (!stack.empty() && item >= array[stack.peek()]) {
            stack.pop()
        }

        let h = -1
        if (!stack.empty()) {
            h = stack.peek()
        }

        result.push(i - h)
        stack.push(i)
    })

    return result
}

module.exports = stockSpan
module.exports = stockSpan2
