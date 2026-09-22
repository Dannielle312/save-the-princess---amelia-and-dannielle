scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mySprite.setPosition(8, 19)
    tiles.setCurrentTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.setPosition(60, 100)
    tiles.setCurrentTilemap(tilemap`level2`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isFlying == false) {
        isFlying = true
        mySprite.ay = -100
        mySprite.vy = -40
        pause(500)
        mySprite.ay = 500
        isFlying = false
        pause(500)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    mySprite.setPosition(9, 13)
    tiles.setCurrentTilemap(tilemap`level5`)
    mySprite.ay = 300
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`floorDark4`, function (sprite, location) {
    mySprite.setPosition(180, 100)
    tiles.setCurrentTilemap(tilemap`level0`)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    sprite.vx = sprite.vx * -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.setPosition(15, 105)
})
function spawnEnemies () {
    for (let index = 0; index < 10; index++) {
        mySprite2 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite2, assets.tile`floorDarkDiamond`)
        mySprite2.vx = 50
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    mySprite.setPosition(15, 105)
    mySprite.ay = 300
    spawnLava()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    mySprite.setPosition(9, 16)
    tiles.setCurrentTilemap(tilemap`level7`)
    spawnEnemies()
})
function spawnLava () {
    mySprite3 = sprites.create(img`
        2 2 4 2 4 2 4 5 2 4 2 5 4 2 4 4 
        4 2 4 5 2 4 4 2 4 2 4 2 2 4 4 2 
        2 4 2 2 2 5 4 2 2 2 5 2 4 2 2 4 
        2 5 4 5 2 4 2 2 5 4 2 2 5 2 4 5 
        4 2 5 4 2 2 5 4 2 2 5 4 2 4 2 2 
        2 4 2 2 2 4 4 2 4 5 4 2 2 2 4 5 
        2 5 2 2 4 2 2 5 2 2 2 2 5 4 4 2 
        2 4 5 4 2 2 4 2 5 4 2 4 2 5 2 5 
        4 5 2 2 4 2 2 5 4 2 2 2 5 4 4 2 
        2 4 4 2 2 4 2 2 2 4 5 2 2 2 2 5 
        4 2 5 2 4 5 4 2 2 2 2 2 4 4 2 5 
        2 2 4 2 4 2 5 2 2 4 2 5 2 2 4 2 
        4 5 2 5 2 2 4 5 4 2 5 2 4 2 2 5 
        2 4 4 2 2 4 2 2 2 2 4 2 5 2 4 4 
        5 4 2 2 4 5 4 2 4 4 2 5 2 4 4 2 
        2 2 5 4 2 2 5 2 4 2 2 4 4 5 2 5 
        `, SpriteKind.Projectile)
    mySprite3.setPosition(-40, 220)
    mySprite3.changeScale(3, ScaleAnchor.Middle)
    mySprite3.vx = 1
    mySprite.setStayInScreen(true)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.setPosition(15, 105)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    mySprite.setPosition(120, 100)
    tiles.setCurrentTilemap(tilemap`level0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    mySprite.setPosition(160, 100)
    tiles.setCurrentTilemap(tilemap`level0`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    music.wawawawaa.play()
    info.changeLifeBy(-1)
})
let mySprite2: Sprite = null
let isFlying = false
let mySprite3: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f 5 f 5 f 5 f f . . . 
    . f f 4 5 5 5 5 f f f . . 
    f f f 5 4 5 5 5 f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(17, 100)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
mySprite3 = sprites.create(img`
    2 2 4 2 4 2 4 5 2 4 2 5 4 2 4 4 
    4 2 4 5 2 4 4 2 4 2 4 2 2 4 4 2 
    2 4 2 2 2 5 4 2 2 2 5 2 4 2 2 4 
    2 5 4 5 2 4 2 2 5 4 2 2 5 2 4 5 
    4 2 5 4 2 2 5 4 2 2 5 4 2 4 2 2 
    2 4 2 2 2 4 4 2 4 5 4 2 2 2 4 5 
    2 5 2 2 4 2 2 5 2 2 2 2 5 4 4 2 
    2 4 5 4 2 2 4 2 5 4 2 4 2 5 2 5 
    4 5 2 2 4 2 2 5 4 2 2 2 5 4 4 2 
    2 4 4 2 2 4 2 2 2 4 5 2 2 2 2 5 
    4 2 5 2 4 5 4 2 2 2 2 2 4 4 2 5 
    2 2 4 2 4 2 5 2 2 4 2 5 2 2 4 2 
    4 5 2 5 2 2 4 5 4 2 5 2 4 2 2 5 
    2 4 4 2 2 4 2 2 2 2 4 2 5 2 4 4 
    5 4 2 2 4 5 4 2 4 4 2 5 2 4 4 2 
    2 2 5 4 2 2 5 2 4 2 2 4 4 5 2 5 
    `, SpriteKind.Projectile)
mySprite3.setPosition(600, 120)
game.onUpdateInterval(100, function () {
    mySprite3.x += 1
})
