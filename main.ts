let y = 0
let x = 0
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    `)
basic.forever(function () {
    x = randint(0, 4)
    y = randint(0, 2)
    led.toggle(x, y)
    basic.pause(100)
    led.toggle(x, y)
    if (input.soundLevel() > 80) {
        basic.clearScreen()
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
    }
})
