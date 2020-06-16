const curRod = require('.')

describe('example 1', () => {
    /*
        array indexes = length
        array values = prices
    */
    const rodPrices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]

    expect(curRod(rodPrices, 4)).toBe(10)
})
