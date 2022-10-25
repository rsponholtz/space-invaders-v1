controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    playersprite.setVelocity(playersprite.vx + 5, playersprite.vx)
})
let tempsprite: Sprite = null
let playersprite: Sprite = null
let asteroids = sprites.allOfKind(SpriteKind.Enemy)
playersprite = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Player)
controller.moveSprite(playersprite)
for (let index = 0; index < 4; index++) {
    let list: Sprite[] = []
    tempsprite = sprites.create(img`
        ............3333bb..bb33333.....
        ........3bb31111d3b311d111d33...
        .......3bdd11111dbd11d11111113..
        .......bdddd1111bd11d111dd11113.
        ......3d111dd111b11d111dd33d11d3
        ......3d11111dd1d11d111d11d33113
        ....bb3d111111dd13dd111d1dd3b31b
        ...b3d3dd111111dd13dd11d1dddbbdb
        ...3ddd31d111111dd133dddddddb.b.
        ..311111d1ddd1111dd11dddddd33...
        ..3111111d111dd111dd1111dd3313..
        ..bddd1111ddd11dd111d111111113..
        ..311ddd111dddd11dd11ddd1111ddb.
        ..31111dd111dddd11dd111dddddddb.
        ...bd1111d1113ddd11dd1111111d3b.
        ...4dd1111d1113ddd11ddd111d333b.
        ..4dbdddd11d11133ddddddddddddb..
        .4ddbddddd11d111d33ddddddddd3b..
        .4dddb11ddd11dd111d333dddd3bb...
        .4dd55b111d11dd11111d3333bbb....
        .445555b111d11dddd111111ddb.....
        .4455555bd1d311ddddddddddd3.....
        .45455555bb1d3111ddddddd113.....
        .4554555555b333d1111111113......
        455554555555bbb33d11111d33......
        4d555545555555dbbb3d11d33.......
        4dd5555455555ddddd43333.........
        45dd555544ddddddd4..............
        .45dd5555d44dddd4...............
        ..45dd55dddd4444................
        ...45dd55444....................
        ....44444.......................
        `, SpriteKind.Enemy)
    tempsprite.setVelocity(randint(-10, 10), randint(-10, 10))
    tempsprite.setBounceOnWall(true)
    list.unshift(tempsprite)
}
