sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Star.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(3)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Star.setPosition(randint(0, 160), randint(0, 120))
    myEnemy.setPosition(randint(0, 160), randint(0, 120))
    info.changeLifeBy(-1)
    info.startCountdown(3)
})
let myEnemy: Sprite = null
let Star: Sprite = null
scene.setBackgroundColor(15)
let mySprite = sprites.create(img`
    . . . f f f f f f f f . . . . . 
    . . f 1 1 1 1 b b b c f . . . . 
    . . f 1 1 b b b b b b f . . . . 
    . . f 1 b b b b b b c f . . . . 
    . . f b b b b b b b c f . . . . 
    . . f 1 b b b b b c c f . . . . 
    . . f b b b b b c c c f . . . . 
    . . . f f f f f f f f . . . . . 
    . . f 1 1 8 1 2 1 b b f . . . . 
    . f 1 1 1 1 1 1 1 1 b b f . . . 
    . f 1 b 1 8 1 2 1 1 b b f . . . 
    . f 1 f 1 1 1 1 1 b f b f . . . 
    . f f f 1 b f 1 b b f f f . . . 
    . . . f 1 b f b b b f . . . . . 
    . . . f f f . f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
Star = sprites.create(img`
    . . . . . . . b b . . . . . . . 
    . . . . . . b d d b . . . . . . 
    . . . . . b d 5 5 d b . . . . . 
    . . . . b b 5 5 5 5 b b . . . . 
    . . . . b 5 5 5 5 5 5 b . . . . 
    b b b b b 5 5 5 5 1 1 d b b b b 
    b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
    b d d 5 5 5 5 5 5 1 1 1 5 d d b 
    . b d d 5 5 5 5 5 5 5 5 d d b . 
    . . b b 5 5 5 5 5 5 5 5 b b . . 
    . . c b 5 5 5 5 5 5 5 5 b c . . 
    . . c 5 5 5 5 d d 5 5 5 5 c . . 
    . . c 5 5 d b b b b d 5 5 c . . 
    . . c 5 d b c c c c b d 5 c . . 
    . . c c c c . . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f . 
    . . . . . . . . . . . . . f f . 
    . . . . . . . . . . . . f b f . 
    . . . f f f f f f f f f 1 b f . 
    . . f f 8 8 1 1 1 1 1 1 1 b f . 
    f f f 8 8 1 1 8 1 8 1 8 1 b f . 
    f b 1 1 1 1 1 1 1 1 1 1 1 b f . 
    f b 1 1 1 1 1 1 1 1 1 1 b b f . 
    f f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
myEnemy.follow(mySprite, 40)
