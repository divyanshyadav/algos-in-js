/**
    Time complexity: O(2^n)
    Space complexity: O(2^n)

 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
    const subSequences = []
    const helper = (nums, start, subSeq) => {
        if (start >= nums.length) {
            subSequences.push(subSeq.slice())
            return
        }

        helper(nums, start + 1, [...subSeq, nums[start]])
        helper(nums, start + 1, subSeq)
    }

    helper(nums, 0, [])

    return !!subSequences.find(seq => {
        let count = 1
        for (let i = 1; i < seq.length; i++) {
            if (seq[i] > seq[i - 1]) {
                count += 1
            } else {
                break
            }

            if (count === 3) {
                return true
            }
        }

        return false
    })
}

/**
    Time complexity: O(n^3)
    Space complexity: O(1)

 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet2 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] < nums[j] && nums[j] < nums[k]) {
                    return true
                }
            }
        }
    }

    return false
}

/**
    Time complexity: O(n^2)
    Space complexity: O(n)

    Using longest increasing subSequence

 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet3 = function (nums) {
    const memo = new Array(nums.length).fill(1)

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && memo[i] <= memo[j]) {
                memo[i] = 1 + memo[j]
            }
        }

        if (memo[i] >= 3) {
            return true
        }
    }

    return false
}

module.exports = increasingTriplet
module.exports = increasingTriplet2
module.exports = increasingTriplet3
