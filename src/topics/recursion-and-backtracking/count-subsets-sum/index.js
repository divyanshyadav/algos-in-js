/*
    Count subsets whose sum is equal to the given total.
*/

const countSets = (array, total) => {
    const helper = (array, start, total) => {
        if (total < 0) {
            return 0
        }

        if (total === 0) {
            return 1
        }

        let count = 0
        for (let i = start; i < array.length; i++) {
            count += helper(array, i + 1, total - array[i])
        }

        return count
    }

    return helper(array, 0, total)
}

module.exports = countSets
