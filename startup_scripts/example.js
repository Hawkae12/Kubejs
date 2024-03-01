StartupEvents.registry('item', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    event.create('upgrade_template').displayName("Upgrade Template")
    event.create('title').displayName("Empty Title")
    event.create("puzzle_key").displayName("Puzzle Key").glow(true)

    event.create('boolders_sword', 'sword').displayName("Sword Custom 1").tier('Netherite')

})

StartupEvents.registry("block", (event) => {

  //  event.create("glow_blo").soundType("stone").displayName("Block"),

    event.create("stone_storage").soundType("stone").redstoneConductor(true).displayName("Chiseled Stone Bricks").blockEntity(entityInfo => {
        entityInfo.inventory(9, 4)
        entityInfo.rightClickOpensInventory()
    })

    

})

//BlockEvents(event => {
//    event.modify('kubejs:glow_blo', block => {
//        block.lightEmission = 5.0
//      })
 // })

 peanut butter