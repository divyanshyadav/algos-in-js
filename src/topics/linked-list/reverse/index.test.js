const reverse = require('.')
const { createArrayFromLinkedList, createLinkedListFrom } = require('../helper')

describe('Testing linked-list reversal algorithm', () => {
    test('case 1', () => {
        const head = createLinkedListFrom([1, 2])

        const actualOutput = createArrayFromLinkedList(reverse(head))
        const expectedOutput = [2, 1]

        expect(actualOutput).toEqual(expectedOutput)
    })

    test('case 1', () => {
        const head = createLinkedListFrom([5, 4, 3, 2, 1])

        const actualOutput = createArrayFromLinkedList(reverse(head))
        const expectedOutput = [1, 2, 3, 4, 5]

        expect(actualOutput).toEqual(expectedOutput)
    })
})
