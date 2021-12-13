const findRabbit = require('.')

test('case 1', () => {
    const rabbitIndex = 3
    const size = 4

    expect(findRabbit(size, rabbitIndex)).toBe(2)
})
