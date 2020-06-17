/*
    Time complexity: O(n^3)
    Space complexity: O(1)

    eg. array = [1, 2, 3]
    then it will iterate sub-arrays like

    1,
    2,
    3,

    1, 2
    2, 3

    1, 2, 3
*/

function maxSubarraySumO3 (array) {
    const sum = (array, start, end) => {
        let total = 0
        for (let i = start; i < end; i++) total += array[i]
        return total
    }

    let maxSubarraySum = -Infinity

    // sub arrays
    for (let size = 1; size <= array.length; size++) {
        for (let start = 0; start < array.length; start += 1) {
            // invalid subarray check
            if (start + size >= array.length) {
                break
            }

            const subArraySum = sum(array, start, start + size)

            maxSubarraySum = Math.max(subArraySum, maxSubarraySum)
        }
    }

    return maxSubarraySum
}

/*
    Time complexity: O(n^2)
    Space complexity: O(1)

    eg. array = [1, 2, 3]
    then it will iterate sub-arrays like

    1,
    1, 2
    1, 2, 3

    2
    2, 3

    3
*/

function maxSubarraySumO2 (array) {
    let max = -Infinity
    for (let start = 0; start < array.length; start++) {
        let sum = 0
        // sub arrays
        for (let size = 1; size < array.length; size++) {
            // invalid subarray check
            if (start + size >= array.length) {
                break
            }

            // adding last element in sub-array
            sum += array[start + size - 1]
            max = Math.max(sum, max)
        }
    }

    return max
}

/*
    Time complexity: O(nlogn)
    Space complexity: O(1)

    Approach: Divide and Conquerer
*/

function maxSubarraySumDC (array) {
    const helper = (array, start, end) => {
        if (start > end) {
            return -Infinity
        }

        if (start === end) {
            return array[start]
        }

        const mid = start + Math.floor((end - start) / 2)

        const leftMss = helper(array, start, mid)
        const rightMss = helper(array, mid + 1, end)

        let leftMax = -Infinity
        let rightMax = -Infinity
        let sum = 0

        for (let i = mid; i >= start; i--) {
            sum += array[i]
            if (sum > leftMax) {
                leftMax = sum
            }
        }

        sum = 0
        for (let i = mid + 1; i <= end; i++) {
            sum += array[i]
            if (sum > rightMax) {
                rightMax = sum
            }
        }

        return Math.max(leftMss, rightMss, leftMax + rightMax)
    }

    return helper(array, 0, array.length - 1)
}

module.exports = maxSubarraySumO3
module.exports = maxSubarraySumO2
module.exports = maxSubarraySumDC
