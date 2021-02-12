    
enum FlyOptions {
    Left,
    Right,
    Forward,
    Backward,
    Up,
    Down,
}

enum FlipOptions {
    Left,
    Right,
    Front,
    Back
}

enum TurnOptions {
    Left,
    Right
}

enum ClawOptions {
    Open,
    Close
}

enum LightOptions {
    Fixed,
    Blinking,
    Oscillating
}

//% color="#000099" weight=10 icon="\uf17b" block="Mambo"
namespace Mambo {

    //% block color="#006600"
    export function takeoff() {
        serial.writeLine("takeoff")
    }

    //% block color="#006600"
    export function land() {
        serial.writeLine("land")
    }

    //% block="fly $choice at speed = $x" color="#000099"
    //% x.min=0 x.max=100 x.defl=20
    export function fly(choice: FlyOptions, x: number) {
        if (choice == 0)
            serial.writeLine("left " + x)
        else if (choice == 1)
            serial.writeLine("right " + x)
        else if (choice == 2)
            serial.writeLine("forward " + x)
        else if (choice == 3)
            serial.writeLine("back " + x)
        else if (choice == 4)
            serial.writeLine("up " + x)
        else if (choice == 5)
            serial.writeLine("down " + x)
    }

    //% block="turn $choice at speed = $x" color="#3399FF"
    //% x.min=0 x.max=100 x.defl=20
    export function turn(choice: TurnOptions, x: number) {
        if (choice == 0)
            serial.writeLine("counterclockwise " + x)
        else if (choice == 1)
            serial.writeLine("clockwise " + x)
    }

    //% block color="#66CCFF"
    export function hover() {
        serial.writeLine("hover")
    }

    //% block="flip $choice" color="#FF9933"
    export function flip(choice: FlipOptions) {
        if (choice == 0)
            serial.writeString("flip left \r\n")
        else if (choice == 1)
            serial.writeString("flip right \r\n")
        else if (choice == 2)
            serial.writeString("flip front \r\n")
        else if (choice == 3)
            serial.writeString("flip back \r\n")
    }

    //% block color="#FF0000"
    export function gunFire() {
        serial.writeLine("fire")
    }

    //% block="claw $choice" color="#339933"
    export function claw(choice: ClawOptions) {
        if (choice == 0)
            serial.writeLine("clawopen")
        else if (choice == 1)
            serial.writeLine("clawclose")
    }
    
    //% block="headlights mode = $choice brightness = $x" color="#9842f4"
    //% x.min=0 x.max=100 x.defl=50
    export function headlights(choice: LightOptions, x: number) {
        if (choice == 0)
            serial.writeLine("lightsfixed " + x)
        else if (choice == 1)
            serial.writeLine("lightsblinked")
        else if (choice == 2)
            serial.writeLine("lightsoscillated")
    }
}
