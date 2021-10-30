const coinChangeWays = require('.')

test('case 1', () => {
    const ways = coinChangeWays(3, [1, 2])
    expect(ways).toBe(2)
})

test('case 2', () => {
    const ways = coinChangeWays(4, [1, 2])
    expect(ways).toBe(3)
})

test('case 3', () => {
    const ways = coinChangeWays(6000, [1, 2])
    expect(ways).toBe(3001)
})
