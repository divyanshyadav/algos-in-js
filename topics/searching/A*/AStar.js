const { Queue } = dsa

class AStar {
    constructor ({ start, end, delay = 0 }) {

        this.start = start
        this.end = end

        this.openSet = new HashHeap((a, b) => a.h - b.h)

        this.openSet.push(start)
        this.closeSet = new Map()

        this.delay = delay

        // Utils
        this.wait = (ms) => new Promise(res => setTimeout(() => res(), ms)) 

        this.isSearchStarted = false
    }

    async search () {
        this.isSearchStarted = true
        while (this.openSet.length !== 0) {
            if (this.openSet.peek() === this.end) {
                break
            }
            const current = this.openSet.pop()
            this.closeSet.set(current.getKey(), current)

            current.neighbors.forEach(neighbor => {
                if (neighbor.isWall) {
                    return
                }

                if (!this.closeSet.has(neighbor.getKey())) {
                    const tempG = current.g + 1

                    if (this.openSet.has(neighbor.getKey())) {
                        if (tempG < neighbor.g) {
                            neighbor.g = tempG
                            neighbor.h = neighbor.heuristic(this.end)
                            neighbor.f = neighbor.g + neighbor.h
                        }
                    } else {
                        neighbor.g = tempG
                        neighbor.h = neighbor.heuristic(this.end)
                        neighbor.f = neighbor.g + neighbor.h
                        neighbor.previous = current
                        this.openSet.push(neighbor)
                    }
                }
            })

            if (this.delay) {
                await this.wait(this.delay)
            }
        }
    }

    getStatus () {

        if (!this.isSearchStarted) {
            return 'waiting'
        }

        if (this.openSet.length === 0) {
            return 'failed'
        }

        if (this.openSet.peek() === this.end) {
            return 'success'
        }

        return 'searching'
    }

    getShortestPath() {
        const nodes = new Queue()
        let cur = this.end
        
        while (cur !== null) {
            nodes.enqueue(cur)
            cur = cur.previous
        }
        return nodes.values()
    }
}

if (typeof module !== 'undefined') {
    module.exports = AStar
}