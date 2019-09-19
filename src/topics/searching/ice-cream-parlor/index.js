/*
    Given money find the two flavours of ice-cream(indexes) where total amount should
    be equal to the provided money.

    Time Complexity  : O(nlogn)
    Space Complexity : O(n)
*/

const binarySearch = (array, price, start, end) => {
    if (start > end) { return null }

    const mid = Math.floor(start + (end - start) / 2)

    if (price > array[mid].price) {
        return binarySearch(array, price, mid + 1, end)
    } else if (price < array[mid].price) {
        return binarySearch(array, price, start, mid - 1)
    } else {
        return array[mid]
    }
}

const findIceCreams = (menu, money) => {
    const sortedMenu = menu.map((price, index) => ({ index, price }))

    sortedMenu.sort((a, b) => a.price - b.price)

    let indices
    sortedMenu.find((item, index) => {
        const found = binarySearch(sortedMenu,
            money - item.price,
            index + 1,
            sortedMenu.length - 1)

        if (found) {
            indices = [Math.min(item.index, found.index),
                Math.max(item.index, found.index)]

            return true
        }

        return false
    })

    return indices
}

module.exports = findIceCreams
