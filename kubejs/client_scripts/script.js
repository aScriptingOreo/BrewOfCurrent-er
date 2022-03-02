// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	//spacebossbar
	event.hide([Item.of('boss_tools:hammer', {Damage:0}), 'boss_tools:iron_stick', 'boss_tools:steel_ingot', 'boss_tools:iron_plate', 'boss_tools:blast_furnace', 'boss_tools:compressor'])
	event.hide(['quark:magnet', Item.of('quark:backpack', {Inventory:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]}), 'quark:ravager_hide', 'quark:bonded_ravager_hide', 'quark:crate', 'quark:soul_compass', 'quark:pipe'])
	
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})