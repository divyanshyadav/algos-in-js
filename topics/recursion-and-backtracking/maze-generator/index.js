const CELL_HEIGHT = CELL_WIDTH = 50
const WINDOW_WIDTH = 600
const WINDOW_HEIGHT = 600
const TOTAL_ROWS = Math.floor(WINDOW_WIDTH / CELL_WIDTH)
const TOTAL_COLUMNS = Math.floor(WINDOW_HEIGHT / CELL_HEIGHT)

let grid
let maze
const stack = []

class Cell {
    constructor ({ x, y, width, height, draw }) {
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.neighbors = []
        this.visited = false

        this.draw = draw

        this.walls = {
            top: true,
            right: true,
            bottom: true,
            left: true
        }
    }

    addNeighbors (neighbors) {
        this.neighbors = neighbors
    }

    getRandomUnvisitedNeighbor () {
        const unvisitedNeighbor = this.neighbors.filter(n => !n.visited)
        if (unvisitedNeighbor.length > 0) {
            const index = Math.floor(Math.random() * unvisitedNeighbor.length)
            return unvisitedNeighbor[index]
        }
    }

    removeWallBetween (next) {
        const diffX = this.x - next.x
        const diffY = this.y - next.y
        if (diffX === -1) {
            this.walls.right = false
            next.walls.left = false
        } else if (diffX === 1) {
            this.walls.left = false
            next.walls.right = false
        } else if (diffY === 1) {
            this.walls.top = false
            next.walls.bottom = false
        } else {
            this.walls.bottom = false
            next.walls.top = false
        }
    }

    highlight (fn) {
        const x = this.x * this.width
        const y = this.y * this.height
        const h = this.height
        const w = this.width
        fn(x, y, h, w)
    }
}

function createCell (row, column) {
    const cell = new Cell({
        x: row,
        y: column,
        height: CELL_HEIGHT,
        width: CELL_WIDTH
    })

    cell.draw = function () {
        const x = this.x * this.width
        const y = this.y * this.height
        const h = this.height
        const w = this.width
        const { top, right, bottom, left } = this.walls

        stroke(color(255))

        if (top) { line(x, y, x + w, y) }

        if (right) { line(x + w, y, x + w, y + h) }

        if (bottom) { line(x, y + h, x + w, y + h) }

        if (left) { line(x, y, x, y + h) }

        if (this.visited) {
            fill(255, 0, 255, 100)
            noStroke()
            rect(x, y, w, h)
        }
    }

    return cell
}

function setup () {
    createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT)

    grid = new Grid({
        rows: TOTAL_ROWS,
        columns: TOTAL_COLUMNS,
        createCell,
        diagonalNeighbors: false
    })

    const start = grid.get(0, 0)
    maze = new Maze(start, 1000)
    maze.generate()
}

class Maze {
    constructor (start, delay = 0) {
        this.start = start
        this.current = start
        this.stack = []
        this.delay = delay

        // Utils
        this.wait = (ms) => new Promise(res => setTimeout(() => res(), ms)) 
    }

    async generate () {
        while (this.current !== undefined) {
            this.current.visited = true
            const next = this.current.getRandomUnvisitedNeighbor()
            if (next) {
                this.stack.push(this.current)
                this.current.removeWallBetween(next)
                this.current = next
            } else {
                this.current = this.stack.pop()
            }

            if (this.delay > 0) {
                await this.wait(this.delay)
            }
        }
    }
}

function draw () {
    background(51)
    drawGrid()

    maze.current && maze.current.highlight((x, y, w, h) => {
        fill(0, 255, 0)
        noStroke()
        rect(x, y, w, h)
    })
}

function drawGrid () {
    grid.forEach(cell => cell.draw())
}
