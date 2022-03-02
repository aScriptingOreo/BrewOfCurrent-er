onEvent('player.logged_in', (event) => {

    if (!event.hasGameStage('starting_items')) {
        event.player.give(Item.of('supplementaries:sack', {BlockEntityTag:{Items:[{Slot:0,id:"akashictome:tome",Count:1,tag:{"akashictome:is_morphing":1,"akashictome:data":{botania:{id:"botania:lexicon",Count:1,tag:{}},tconstruct:{id:"tconstruct:materials_and_you",Count:1},resourcefulbees:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"resourcefulbees:fifty_shades_of_bees"}},ars_nouveau:{id:"ars_nouveau:worn_notebook",Count:1},astralsorcery:{id:"astralsorcery:tome",Count:1},theoneprobe:{id:"theoneprobe:probenote",Count:1,tag:{"akashictome:displayName":{text:"The One Probe Read Me"},"akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"The One Probe Read Me\"}]}"}}},immersiveengineering:{id:"immersiveengineering:manual",Count:1},"mana-and-artifice":{id:"mana-and-artifice:guide_book",Count:1},bloodmagic:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"bloodmagic:guide"}},witchery_rewitched:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"witchery_rewitched:circles_and_rites"}},occultism:{id:"occultism:dictionary_of_spirits",Count:1}}}},{Slot:1,id:"waystones:waystone",Count:1},{Slot:2,id:"create:sweet_roll",Count:8}]}}));

        event.addGameStage('starting_items');
    }
});
