const { requiredRooms } = require('.')

test('case 1', () => {
    const activities = [
        [1, 4], [4, 8], [2, 5], [6, 7]
    ]

    expect(requiredRooms(activities)).toBe(2)
})
