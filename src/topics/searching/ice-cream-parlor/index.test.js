const findIceCreams = require('.')

test('case 1', () => {
    const iceCreamMenu = [2, 7, 13, 5, 4, 13, 5]
    expect(findIceCreams(iceCreamMenu, 10)).toEqual([3, 6])
})

test('case 2', () => {
    const iceCreamMenu = [2, 7, 13, 5, 4, 13, 5]
    expect(findIceCreams(iceCreamMenu, 11)).toEqual([1, 4])
})

test('case 3', () => {
    const iceCreamMenu = [2, 7, 13, 5, 4, 13, 5]
    expect(findIceCreams(iceCreamMenu, 14)).toEqual(undefined)
})
