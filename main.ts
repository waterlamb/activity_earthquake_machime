basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.Strength) - 1023,
    0
    )
})
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) - 1023 > 500) {
        music.ringTone(262)
    } else {
        music.stopAllSounds()
    }
})
