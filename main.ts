radio.onReceivedNumber(function (receivedNumber) {
    MotorDriver.MotorRun(Motor.A, Dir.backward, 16)
    MotorDriver.MotorRun(Motor.B, Dir.backward, 16)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendValue("forward", 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("left")
})
input.onGesture(Gesture.ScreenUp, function () {
    MotorDriver.MotorStop(Motor.A)
    MotorDriver.MotorStop(Motor.B)
})
radio.onReceivedString(function (receivedString) {
    MotorDriver.MotorRun(Motor.A, Dir.forward, 16)
    MotorDriver.MotorStop(Motor.B)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
})
radio.onReceivedValue(function (name, value) {
    MotorDriver.MotorRun(Motor.A, Dir.forward, 16)
    MotorDriver.MotorRun(Motor.B, Dir.forward, 16)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(0)
})
