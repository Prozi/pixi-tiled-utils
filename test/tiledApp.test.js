const { TiledApplication } = require('..')

const app = new TiledApplication()

app.createWorld(
    "https://www.vikingsvillage.io/game/assets/json/island_small_21.json",
    "https://www.vikingsvillage.io/game/assets/img/Viking3.png"
).then(() => {
    console.log(`loaded ${app.objects.length} objects`)
    console.log(`populated stage with ${app.stage.children.length} sprites`)

    process.exit(0)
})
