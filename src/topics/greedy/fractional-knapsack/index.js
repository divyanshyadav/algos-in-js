function fractionalKnapsack (weights, costs, capacity) {
    const items = weights.map((w, index) => {
        return {
            weight: w,
            cost: costs[index]
        }
    })

    items.sort((a, b) => (b.cost / b.weight) - (a.cost / a.weight))

    let load = capacity
    let ans = 0
    for (let i = 0; i < items.length; i++) {
        if (items[i].weight <= load) {
            ans += items[i].cost
            load -= items[i].weight
        } else {
            ans += items[i].cost * (load / items[i].weight)
            load = 0
            break
        }
    }

    return ans
}

module.exports = { fractionalKnapsack }
