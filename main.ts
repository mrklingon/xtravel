function init () {
    x = 2
    y = 2
    dx = [
    0,
    0,
    1,
    0,
    -1
    ]
    dy = [
    0,
    -1,
    0,
    1,
    0
    ]
}
function findDir () {
    dir = 0
    if (input.acceleration(Dimension.X) < -300) {
        dir = 4
    } else {
        if (input.acceleration(Dimension.Y) > 300) {
            dir = 3
        }
        if (input.acceleration(Dimension.Y) < -500) {
            dir = 1
        }
    }
    if (input.acceleration(Dimension.X) > 300) {
        dir = 2
    }
    return dir
}
let move = 0
let dir = 0
let dy: number[] = []
let dx: number[] = []
let y = 0
let x = 0
init()
basic.forever(function () {
    led.plotBrightness(x, y, 255)
})
basic.forever(function () {
    led.unplot(x, y)
    move = findDir()
    x += dx[move]
    y += dy[move]
    if (x < 0) {
        x = 0
    }
    if (y < 0) {
        y = 0
    }
    if (x > 4) {
        x = 4
    }
    if (y > 4) {
        y = 4
    }
    basic.pause(100)
})
