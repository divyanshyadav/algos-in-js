const { activitySelection } = require('.')

test('case 1', () => {
    const activities = [
        [3, 6], [7, 12],
        [1, 8], [9, 10],
        [11, 15], [2, 5],
        [4, 13]
    ]

    expect(activitySelection(activities)).toBe(3)
})
