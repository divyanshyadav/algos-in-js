const { activitySelection, activitySelectionUsingDP } = require('.')

test.only('case 1', () => {
    const activities = [
        [3, 6], [7, 12],
        [1, 8], [9, 10],
        [11, 15], [2, 5],
        [4, 13]
    ]

    expect(activitySelection(activities)).toEqual([1, 0, 0, 1, 1, 0, 0])
})

test.only('case 2', () => {
    const activities = [
        [1, 4], [3, 5],
        [0, 6], [5, 7],
        [3, 9], [5, 9],
        [6, 10], [8, 11],
        [8, 12], [2, 14],
        [12, 16]
    ]

    expect(activitySelection(activities)).toEqual([1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1])
})

test('activitySelectionUsingDP | case 1', () => {
    const activities = [
        [3, 6], [7, 12],
        [1, 8], [9, 10],
        [11, 15], [2, 5],
        [4, 13]
    ]

    expect(activitySelectionUsingDP(activities)).toBe(3)
})
