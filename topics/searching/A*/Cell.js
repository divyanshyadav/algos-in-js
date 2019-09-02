class Cell {
    constructor ({ x, y, width, height, neighbors, isWall = false, draw }) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.f = 0
        this.g = 0
        this.h = 0

        this.isWall = isWall
        this.neighbors = neighbors
        this.previous = null

        this.draw = draw
    }

    addNeighbors (neighbors = []) {
        this.neighbors = neighbors
    }

    heuristic (end) {
        const distance = (a, b) => {
            const x2 = Math.pow((a.x - b.x), 2)
            const y2 = Math.pow((a.y - b.y), 2)
            return Math.sqrt(x2 + y2)
        }

        return distance(this, end)
    }

    getKey () {
        return `(${this.x},${this.y})`
    }
}

if (typeof module !== 'undefined') {
    module.exports = Cell
}
