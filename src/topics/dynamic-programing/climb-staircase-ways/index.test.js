const ways = require('.')

test('case 1', () => {
    const staircaseSize = 2
    const steps = [1, 2]

    expect(ways(staircaseSize, steps)).toBe(2)
})

test('case 2', () => {
    const staircaseSize = 4
    const steps = [1, 2]

    expect(ways(staircaseSize, steps)).toBe(5)
})

test('case 3', () => {
    const staircaseSize = 3
    const steps = [1, 2]

    expect(ways(staircaseSize, steps)).toBe(3)
})
