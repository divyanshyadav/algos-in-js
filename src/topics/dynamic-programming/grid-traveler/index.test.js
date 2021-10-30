const gridTraveler = require('.')

test('case 1', () => {
    const acutal = gridTraveler(3, 3)
    const expected = 6

    expect(acutal).toBe(expected)
})
