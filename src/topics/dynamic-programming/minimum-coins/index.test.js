const { minCoinsCount, minCoins } = require('./index')

test('case 0', () => {
    const coins = undefined
    const change = 1
    const output = minCoinsCount(coins, change)
    const expectedOutput = 0

    expect(output).toBe(expectedOutput)
})

test('case 1', () => {
    const coins = [1, 3, 4]
    const change = 6
    const output = minCoinsCount(coins, change)
    const expectedOutput = 2

    expect(output).toBe(expectedOutput)
})

test('case 2', () => {
    const coins = [10, 5, 2, 1]
    const change = 1000
    const output = minCoinsCount(coins, change)
    const expectedOutput = 100

    expect(output).toBe(expectedOutput)
})

test('case 3', () => {
    const coins = [10, 5, 2, 1]
    const change = 3
    const output = minCoinsCount(coins, change)
    const expectedOutput = 2

    expect(output).toBe(expectedOutput)
})

test('case 4', () => {
    const coins = [9, 6, 5, 1]
    const change = 11
    const output = minCoinsCount(coins, change)
    const expectedOutput = 2

    expect(output).toBe(expectedOutput)
})

test('case 5', () => {
    const coins = [25, 10, 5]
    const change = 30
    const output = minCoinsCount(coins, change)
    const expectedOutput = 2

    expect(output).toBe(expectedOutput)
})

test('case 6', () => {
    const coins = [10, 5, 2, 1]
    const change = 1000
    const output = minCoinsCount(coins, change)
    const expectedOutput = 100

    expect(output).toBe(expectedOutput)
})

test('case 7', () => {
    const coins = [1, 2, 5]
    const change = 0
    const output = minCoinsCount(coins, change)
    const expectedOutput = 0

    expect(output).toBe(expectedOutput)
})

test('case 8  | coins', () => {
    const coins = [1, 3, 4]
    const change = 6
    const output = minCoins(coins, change)
    const expectedOutput = [3, 3]

    expect(output).toEqual(expectedOutput)
})

test('case 9  | coins', () => {
    const coins = [1, 2, 5]
    const change = 6
    const output = minCoins(coins, change)
    const expectedOutput = [1, 5]

    expect(output).toEqual(expectedOutput)
})

test('case 10 | coins', () => {
    const coins = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
    const change = 456
    const output = minCoins(coins, change)
    const expectedOutput = [200, 200, 50, 5, 1]

    expect(output).toEqual(expectedOutput)
})
