class Grid {
    constructor ({ rows, columns, createCell, diagonalNeighbors = false }) {
        this.grid = []
        this.rows = rows
        this.columns = columns
        this.createCell = createCell
        this.diagonalNeighbors = diagonalNeighbors

        this.constructCells()
        this.assignNeighbors()
    }

    get (row, column) {
        return this.grid[row][column]
    }

    getGrid () {
        return this.grid
    }

    constructCells () {
        for (let i = 0; i < this.rows; i++) {
            const row = []
            for (let j = 0; j < this.columns; j++) {
                row.push(this.createCell(i, j))
            }
            this.grid.push(row)
        }
    }

    assignNeighbors () {
        this.grid.forEach(r => {
            r.forEach(c => {
                c.addNeighbors(this.getNeighbors(c.x, c.y))
            })
        })
    }

    getNeighbors (i, j) {
        const neighbors = []

        if (j + 1 < this.columns) {
            neighbors.push(this.grid[i][j + 1])
        }

        if (j - 1 > -1) {
            neighbors.push(this.grid[i][j - 1])
        }

        if (i + 1 < this.rows) {
            neighbors.push(this.grid[i + 1][j])
        }

        if (i - 1 >= 0) {
            neighbors.push(this.grid[i - 1][j])
        }

        if (this.diagonalNeighbors) {
            this.getDiagonalNeighbors(i, j).forEach(n => neighbors.push(n))
        }

        return neighbors
    }

    getDiagonalNeighbors (i, j) {
        const neighbors = []

        if (j - 1 >= 0 && i + 1 < this.rows) {
            neighbors.push(this.grid[i + 1][j - 1])
        }

        if (j + 1 < this.columns && i + 1 < this.rows) {
            neighbors.push(this.grid[i + 1][j + 1])
        }

        if (j + 1 < this.columns && i - 1 >= 0) {
            neighbors.push(this.grid[i - 1][j + 1])
        }

        if (j - 1 >= 0 && i - 1 >= 0) {
            neighbors.push(this.grid[i - 1][j - 1])
        }
        return neighbors
    }

    getRandomCell ({ randomColumn = false, randomRow = false }) {
        const row = randomRow ? Math.floor((Math.random() * 10 * this.rows) % this.rows) : this.rows - 1
        const column = randomColumn ? Math.floor((Math.random() * 10 * this.columns) % this.columns) : this.columns - 1

        return this.get(row, column)
    }
}

if (typeof module !== 'undefined') {
    module.exports = Grid
}
