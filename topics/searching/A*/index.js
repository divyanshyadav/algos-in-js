const CELL_WIDTH = CELL_HEIGHT = 10
const ANIMATION_DELAY = 40
const WALL_RANDOMNESS_PERCENT = 25
const DIAGONAL_NEIGHBORS = false

const GIRD_WIDTH = window.innerWidth
const GRID_HEIGHT = window.innerHeight
const ROWS = Math.floor(GIRD_WIDTH / CELL_WIDTH) - 1
const COLUMNS = Math.floor(GRID_HEIGHT / CELL_HEIGHT) - 1

// Globals
let aStar
let grid

/* Initial setup */

function setup () {
    createCanvas(GIRD_WIDTH, GRID_HEIGHT)

    grid = new Grid({
        rows: ROWS,
        columns: COLUMNS,
        createCell,
        diagonalNeighbors: DIAGONAL_NEIGHBORS
    })

    const start = grid.get(0, 0)
    const end = grid.getRandomCell({
        randomColumn: true
    })

    start.isWall = false
    end.isWall = false

    aStar = new AStar({
        start,
        end,
        delay: ANIMATION_DELAY
    })
}

const createCell = (row, column) => {
    return new Cell({
        x: row,
        y: column,
        width: CELL_WIDTH,
        height: CELL_HEIGHT,
        isWall: Math.random() < (WALL_RANDOMNESS_PERCENT / 100),
        draw: function (color) {
            fill(color)
            noStroke(1)
            rect(this.x * this.width,
                this.y * this.height,
                this.width, this.height)
        }
    })
}

/* 5p draw functions */

function draw () {
    const RED = color(255, 0, 0)
    const GREEN = color(0, 255, 0)

    drawVisitedCells(RED)
    drawWillBeVisiting(GREEN)
    checkAStarStatus()
}

function drawShortestPath (color) {
    aStar.getShortestPath()
        .forEach(node => node.draw(color))
}

function checkAStarStatus () {
    const WHITE = color(0)
    const BLACK = color(255)
    const BLUE = color(0, 0, 255)

    const state = aStar.getStatus()

    switch (state) {
    case 'waiting':
        drawGrid(WHITE, BLACK)
        drawEndCell(BLUE)
        aStar.search()
        break

    case 'success':
        drawShortestPath(BLUE)
        noLoop()
        break

    case 'failed':
        noLoop()
        break

    case 'searching':
        // console.log(state)
        break
    }
}

function drawGrid (openCellColor, closeCellColor) {
    grid.getGrid().forEach(r => r.forEach(c => {
        if (c.isWall) {
            c.draw(openCellColor)
        } else {
            c.draw(closeCellColor)
        }
    }))
}

function drawVisitedCells (color) {
    aStar.closeSet.forEach(c => {
        if (!c.drawn) {
            c.draw(color)
            c.drawn = true
        }
    })
}

function drawWillBeVisiting (color) {
    aStar.openSet.forEach(c => {
        c.draw(color)
    })
}

function drawEndCell (color) {
    aStar.end.draw(color)
}
