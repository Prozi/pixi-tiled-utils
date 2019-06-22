const { TiledApplication, utils } = require('..')

const app = new TiledApplication()

async function test() {
    await app.createWorld(
        "https://www.vikingsvillage.io/game/assets/json/island_small_21.json",
        "https://www.vikingsvillage.io/game/assets/img/Viking3.png"
    )

    console.log(`loaded ${app.objects.length} objects`)
    console.log(`populated stage with ${app.stage.children.length} sprites`)

    process.exit(0)
}

test()
