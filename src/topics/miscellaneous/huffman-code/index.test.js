const {
    getCharFreqMap,
    getMinHeap,
    getHuffmanTree,
    getCharEncodingValues
} = require('./index')

test('character frequency function', () => {
    const input = 'abbcd'
    const expectedOutput = {
        a: 1,
        b: 2,
        c: 1,
        d: 1
    }

    getCharFreqMap(input).forEach((value, key) => {
        expect(expectedOutput[key]).toEqual(value)
    })
})

test('create heap array from character frequency map', () => {
    const input = getCharFreqMap('abbcd')
    const output = getMinHeap(input)
    expect(output).not.toBe(null)
})

test('creating huffman tree', () => {
    const input = getMinHeap(getCharFreqMap('abbcd'))
    const output = getHuffmanTree(input)
    expect(output).not.toBe(null)
})

test('getCharEncodingValues', () => {
    const input = getMinHeap(getCharFreqMap('abbcd'))
    const tree = getHuffmanTree(input)
    const map = getCharEncodingValues(tree)
    const expectedOutput = {
        b: '1',
        c: '01',
        a: '001',
        d: '000'
    }
    map.forEach((value, key) => {
        expect(value).toEqual(expectedOutput[key])
    })
})

test.skip('getCharEncodingValues case 2', () => {
    const copy = (char, times) => {
        return Array.from(Array(times).keys()).reduce((acc, value) => {
            acc = acc + char
            return acc
        }, '')
    }
    const string = `${copy('a', 44)}${copy('b', 40)}${copy('c', 11)}${copy('d', 2)}${copy('e', 2)}${copy('f', 1)}`
    console.log(string)
    const charFreqMap = getCharFreqMap(string)
    console.log(charFreqMap)
    const heap = getMinHeap(charFreqMap)
    console.log(heap)
    const tree = getHuffmanTree(heap)
    const map = getCharEncodingValues(tree)
    const expectedOutput = {
        a: '1',
        b: '01',
        c: '001',
        d: '0001',
        e: '00001',
        f: '00000'
    }
    console.log(map)
    map.forEach((value, key) => {
        expect(value).toEqual(expectedOutput[key])
    })
})
