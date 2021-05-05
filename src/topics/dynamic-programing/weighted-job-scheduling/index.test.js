const { weightedJobScheduling } = require('.')

test('case 1', () => {
    const activities = [
        [1, 3], [2, 5], [4, 6], [6, 7], [5, 8], [7, 9]
    ]

    const weights = [5, 6, 5, 4, 11, 2]

    expect(weightedJobScheduling(activities, weights)).toEqual(
        [[2, 5], [5, 8]]
    )
})
