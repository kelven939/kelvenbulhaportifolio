class ConwaysGameOfLife {
    constructor() {
        this.canvas = document.querySelector("canvas#conway")
        this.ctx = this.canvas.getContext('2d')
        this.width = this.canvas.width
        this.height = this.canvas.height
        this.n = parseInt(this.width / Cell.WIDTH, 10)
        this.pieces = []
        this.makePieces()
        this.canvas.addEventListener('click', (evt) => this.click(evt))
        this.lastClick = 0
        this.lostGenerations = 0 // generations where everyone is dead
    }

    click(evt) {
        const j = Math.floor(evt.offsetY / Cell.WIDTH)
        const i = Math.floor(evt.offsetX / Cell.WIDTH)

        this.pieces[i][j].live = true
        this.pieces[i][j].nextState = true

        this.lastClick = +new Date()
    }

    makePieces () {
        const n = this.n
        for (let i = 0; i < n; i++) {
            const items = []
            for (let j = 0; j < n; j++) {
                items.push(new Cell(i, j))
            }
            this.pieces.push(items)
        }
    }

    nextGeneration() {
        if (+new Date() - this.lastClick < 2000) return

        this.lastClick = 0

        let atLeastOneSurvivor = false
        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.n; j++) {
                const cell = this.pieces[i][j]
                const neighbours = this.neighborsOf(i, j).length
                if (cell.live) {
                    atLeastOneSurvivor = true

                    // 1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
                    if (neighbours < 2) cell.prepareFor(0)
                    
                    // 2. Any live cell with two or three live neighbours lives on to the next generation.
                    else if (neighbours <= 3) cell.prepareFor(1) 

                    // 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
                    else if (neighbours > 3) cell.prepareFor(0)

                } else {
                    // 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                    if (neighbours === 3) cell.prepareFor(1)
                }
            }
        }

        if (atLeastOneSurvivor) {
            this.lostGenerations = 0
        } else {
            this.lostGenerations += 1
            if (this.lostGenerations >= 3) {
                this.lostGenerations = 0
                const els = this.pieces.flat()
                let n = 10
                while (n > 0) {
                    const k = ~~(Math.random() * els.length)
                    const [el] = els.splice(k, 1)
        
                    el.prepareFor(1)
                    n--
                }
            }
        }
    }

    draw () {
        this.ctx.beginPath()
        this.ctx.clearRect(0, 0, this.width, this.height)

        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.n; j++) {
                this.pieces[i][j].commit()
                this.pieces[i][j].draw(this.ctx)
            }
        }

        this.ctx.closePath()
    }

    neighborsOf(i, j) {
        const top = i - 1 < 0 ? null : this.pieces[i - 1][j]
        const bottom = i + 1 >= this.pieces.length ? null : this.pieces[i + 1][j]
        const left = j - 1  < 0 ? null : this.pieces[i][j - 1]
        const right = j + 1 >= this.pieces[i].length ? null : this.pieces[i][j + 1]

        const top_left = top && left ? this.pieces[i - 1][j - 1] : null
        const top_right = top && right ? this.pieces[i - 1][j + 1] : null
        const bottom_left = bottom && left ? this.pieces[i + 1][j - 1] : null
        const bottom_right = bottom && right ? this.pieces[i + 1][j + 1] : null

        return [top, bottom, left, right, top_left, top_right, bottom_left, bottom_right].filter(a => a !== null && a.live)
    }
}

class Cell {
    static WIDTH = 35

    constructor(i, j) {
        this.i = i
        this.j = j
        this.live = false
        this.nextState = false
    }

    prepareFor(s) {
        this.nextState = !!s
    }

    commit() {
        this.live = this.nextState
        this.nextState = this.live
    }

    draw (ctx) {
        ctx.fillStyle = this.live ? "white" : "#464646"
        ctx.fillRect(this.i * Cell.WIDTH, this.j * Cell.WIDTH, Cell.WIDTH - 1, Cell.WIDTH - 1)
        /*ctx.strokeStyle = "white"
        ctx.strokeRect(this.i * Cell.WIDTH, this.j * Cell.WIDTH, Cell.WIDTH, Cell.WIDTH)*/  
    }
}

window.addEventListener('load', () => {
    const canvas = document.createElement('canvas')
    const w = document.querySelector("#game").offsetWidth

    canvas.setAttribute("id", "conway")
    canvas.setAttribute("width", w > 400 ? 400 : w)
    canvas.setAttribute("height", w > 400 ? 400 : w)
    canvas.setAttribute("style", "cursor: pointer")

    document.querySelector("#game").appendChild(canvas)

    const conwaysGameOfLife = new ConwaysGameOfLife()


    // Drawing a 'L'
    conwaysGameOfLife.pieces[0][3].nextState = 1
    conwaysGameOfLife.pieces[1][3].nextState = 1
    conwaysGameOfLife.pieces[2][3].nextState = 1
    conwaysGameOfLife.pieces[4][3].nextState = 1
    conwaysGameOfLife.pieces[5][3].nextState = 1

    conwaysGameOfLife.pieces[5][4].nextState = 1
    conwaysGameOfLife.pieces[5][5].nextState = 1
    conwaysGameOfLife.pieces[5][6].nextState = 1
    conwaysGameOfLife.pieces[5][7].nextState = 1

    setInterval(() => conwaysGameOfLife.nextGeneration(), 900)
    setInterval(() => conwaysGameOfLife.draw(), 200)
})