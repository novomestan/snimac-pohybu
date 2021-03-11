basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(5000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
let Pocet = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        Pocet += 1
        basic.showNumber(Pocet)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
