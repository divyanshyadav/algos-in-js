const find = require('.')

test('case 1', () => {
    const points = [[1, 3], [-2, 2]]
    expect(find(points, 1)).toEqual([[-2, 2]])
})

test('case 2', () => {
    const points = [[3, 3], [5, -1], [-2, 4]]
    expect(find(points, 2)).toEqual([[3, 3], [-2, 4]])
})
