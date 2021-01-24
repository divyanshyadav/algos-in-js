function calculate (weights, costs, capacity) {
    function helper (index, weight) {
        if (index >= costs.length || weight <= 0) {
            return 0
        }

        if (weights[index] > weight) {
            return helper(index + 1, weight)
        }

        return Math.max(
            helper(index + 1, weight),
            costs[index] + helper(index + 1, weight - weights[index])
        )
    }

    return helper(0, capacity)
}

module.exports = calculate
