input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onGesture(Gesture.TiltLeft, function () {
    pic.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
input.onGesture(Gesture.TiltRight, function () {
    pic.change(LedSpriteProperty.X, 1)
})
let pic: game.LedSprite = null
let num = 0
basic.showIcon(IconNames.Heart)
num = 9
basic.showNumber(num)
pic = game.createSprite(2, 2)
basic.forever(function () {
	
})
