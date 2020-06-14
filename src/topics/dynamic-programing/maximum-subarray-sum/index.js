/*
    Time complexity: O(n^3)
    Space complexity: O(1)

    naive solution
*/

function maxSubarraySum (array) {
    let max = -Infinity

    for (let size = 1; size <= array.length; size++) {
        for (let start = 0; start <= array.length - size; start += 1) {
            let subArraySum = 0

            for (let index = start; index < start + size; index++) {
                subArraySum += array[index]
            }

            if (subArraySum > max) {
                max = subArraySum
            }
        }
    }

    return max
}

module.exports = maxSubarraySum
