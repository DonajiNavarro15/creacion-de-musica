input.onButtonPressed(Button.A, function () {
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 2; index++) {
        music.playTone(196, music.beat(BeatFraction.Whole))
    }
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 2; index++) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Te quiero")
    basic.pause(500)
})
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.showString("Feliz Cumpleaños")
basic.forever(function () {
	
})
