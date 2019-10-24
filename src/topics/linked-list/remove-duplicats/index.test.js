const removeDuplicates = require('.')
const { createArrayFromLinkedList, createLinkedListFrom } = require('../helper')

describe('test duplicates removal algo for linked-list', () => {
    test('case 1', () => {
        const head = createLinkedListFrom([1, 2, 2, 2, 1, 2])

        const actualOutput = createArrayFromLinkedList(removeDuplicates(head))
        const expectedOutput = [1, 2]

        expect(actualOutput).toEqual(expectedOutput)
    })

    test('case 2', () => {
        const head = createLinkedListFrom([1, 1, 1, 1])

        const actualOutput = createArrayFromLinkedList(removeDuplicates(head))
        const expectedOutput = [1]

        expect(actualOutput).toEqual(expectedOutput)
    })

    test('case 3', () => {
        const head = createLinkedListFrom([1, 2, 3, 4, 3, 5])

        const actualOutput = createArrayFromLinkedList(removeDuplicates(head))
        const expectedOutput = [1, 2, 3, 4, 5]

        expect(actualOutput).toEqual(expectedOutput)
    })

    test('case 4', () => {
        const head = createLinkedListFrom([1, 2, 3])

        const actualOutput = createArrayFromLinkedList(removeDuplicates(head))
        const expectedOutput = [1, 2, 3]

        expect(actualOutput).toEqual(expectedOutput)
    })
})
