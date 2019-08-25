const secondSmallest = (array) => {
    let firstSmallest = Infinity; let secondSmallest = Infinity

    array.forEach(element => {
        if (element < firstSmallest) {
            secondSmallest = firstSmallest
            firstSmallest = element
        } else if (element >= firstSmallest && element < secondSmallest) {
            secondSmallest = element
        }
    })

    return secondSmallest !== Infinity ? secondSmallest : undefined
}

module.exports = secondSmallest
