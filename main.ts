input.onButtonPressed(Button.A, function () {
    getal += -1
})
input.onButtonPressed(Button.B, function () {
    getal += 1
})
let getal = 0
basic.showNumber(getal)
basic.forever(function () {
    basic.showNumber(getal)
})
