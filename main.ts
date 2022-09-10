basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.Strength) - 1023,
    0
    )
})
