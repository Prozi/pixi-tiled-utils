const { TiledApplication } = require('..')

const app = new TiledApplication()

async function test() {
    await app.createWorld(
        "https://www.vikingsvillage.io/game/assets/json/island_small_21.json",
        "https://www.vikingsvillage.io/game/assets/img/Viking3.png"
    )

    console.log(app.show())

    process.exit(0)
}

test()
