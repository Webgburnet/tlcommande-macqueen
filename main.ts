input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    radio.sendString("B")
})
let Groupe = 1
radio.setGroup(Groupe)
basic.showNumber(Groupe)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -255 && input.acceleration(Dimension.Y) < -255) {
        basic.showArrow(ArrowNames.NorthWest)
        radio.sendString("AvG")
    } else if (input.acceleration(Dimension.X) > 255 && input.acceleration(Dimension.Y) < -255) {
        basic.showArrow(ArrowNames.NorthEast)
        radio.sendString("AvD")
    } else if (input.acceleration(Dimension.X) < -255 && input.acceleration(Dimension.Y) > 255) {
        basic.showArrow(ArrowNames.SouthWest)
        radio.sendString("ArG")
    } else if (input.acceleration(Dimension.X) > 255 && input.acceleration(Dimension.Y) > 255) {
        basic.showArrow(ArrowNames.SouthEast)
        radio.sendString("ArD")
    } else if (input.acceleration(Dimension.X) > 255) {
        basic.showArrow(ArrowNames.East)
        radio.sendString("D")
    } else if (input.acceleration(Dimension.X) < -255) {
        basic.showArrow(ArrowNames.West)
        radio.sendString("G")
    } else if (input.acceleration(Dimension.Y) > 255) {
        basic.showArrow(ArrowNames.South)
        radio.sendString("Ar")
    } else if (input.acceleration(Dimension.Y) < -255) {
        basic.showArrow(ArrowNames.North)
        radio.sendString("Av")
    } else {
        basic.showIcon(IconNames.No)
        radio.sendString("S")
    }
})
