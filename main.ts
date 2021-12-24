minode.onPIREvent(ConnName.D12, function () {
    minode.rgbChooseColor(ConnName.D15, MiNodeColor.MiNode_RGB_COLOR_WHITE)
    minode.FanControl_1(AnalogConnName.Analog_A1, 50)
})
minode.FanControl_1(AnalogConnName.Analog_A1, 0)
minode.RGBSetColor(
ConnName.D15,
0,
0,
0
)
basic.forever(function () {
    if (minode.PIRIsTriggered(ConnName.D12)) {
        minode.rgbChooseColor(ConnName.D15, MiNodeColor.MiNode_RGB_COLOR_WHITE)
        minode.FanControl_1(AnalogConnName.Analog_A1, 50)
    } else {
        minode.FanControl_1(AnalogConnName.Analog_A1, 0)
        minode.RGBSetColor(
        ConnName.D15,
        0,
        0,
        0
        )
    }
})
