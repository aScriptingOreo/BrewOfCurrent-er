// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
//ars nouvou recipes
  event.shaped('ars_nouveau:mana_condenser', [
    ' A ',
    'BCB',
    'B B'
  ], {
    A: 'minecraft:diamond',
	B: 'minecraft:gold_ingot',
	C: 'minecraft:obsidian'
  }),
  
  event.shaped('ars_nouveau:mana_jar', [
    'ABA',
    'A A',
    'AAA'
  ], {
    A: '#forge:glass',
	B: 'minecraft:obsidian'
  }),
  
  event.shaped('ars_nouveau:crystallizer', [
    'BCB',
    'BAB',
    'BCB'
  ], {
    A: 'minecraft:diamond',
	B: 'minecraft:gold_ingot',
	C: 'minecraft:obsidian'
  }),
  
  event.shaped('ars_nouveau:red_archwood_sapling', [
    'BCB',
    'BAB',
    'BCB'
  ], {
    A: '#minecraft:saplings',
	B: 'minecraft:blaze_powder',
	C: 'ars_nouveau:mana_gem'
  }),
  event.shaped('ars_nouveau:green_archwood_sapling', [
    'BCB',
    'BAB',
    'BCB'
  ], {
    A: '#minecraft:saplings',
	B: 'minecraft:green_dye',
	C: 'ars_nouveau:mana_gem'
  }),
  event.shaped('ars_nouveau:blue_archwood_sapling', [
    'BCB',
    'BAB',
    'BCB'
  ], {
    A: '#minecraft:saplings',
	B: 'minecraft:lapis_lazuli',
	C: 'ars_nouveau:mana_gem'
  }),
//chest hmm
  event.shaped('minecraft:chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: '#minecraft:planks'
  }),
  event.shaped('4x minecraft:chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: '#minecraft:logs'
  }),
  event.shaped('16x minecraft:stick', [
    'A',
    'A'
  ], {
    A: '#minecraft:logs'
  }),
  event.shaped('minecraft:hopper', [
    'ABA',
    'ABA',
    ' A '
  ], {
    A: 'minecraft:iron_ingot',
	B: '#minecraft:logs'
  }),
//prettified pretty pipes
	event.remove({output: 'prettypipes:pipe'})
	event.shapeless('prettypipes:pipe', 'ppfluids:fluid_pipe')
	event.shaped('16x prettypipes:pipe', [
		'IGI'
		], {
			I: 'minecraft:iron_ingot',
			G: '#forge:glass'
		}
	)
	event.remove({output: 'prettypipes:blank_module'})
	event.shaped('prettypipes:blank_module', [
		'RRR',
		'RPR',
		'RRR'
		], {
			R: 'minecraft:redstone',
			P: 'prettypipes:pipe'
		}
	),
	event.remove({output: 'prettypipes:item_terminal'})
	event.shaped('prettypipes:item_terminal', [
		'III',
		'ACB',
		'III'
		], {
			I: 'minecraft:iron_ingot',
			C: '#forge:chests',
			A: 'prettypipes:high_retrieval_module',
			B: 'prettypipes:high_extraction_module'
		}
	)

//misc recipes
	event.shaped('mekanism:upgrade_muffling', [
		'CC',
		'SS'
		], {
			C: 'minecraft:clay_ball',
			S: 'minecraft:cobblestone'
		}
	)
	event.shaped('portable_stonecutter:portable_stonecutter', [
		' C',
		'S '
		], {
			S: 'minecraft:stick',
			C: 'minecraft:stonecutter'
		}
	)
	event.shaped('supplementaries:sack', [
		' S ',
		'L L',
		' L '
		], {
			S: 'minecraft:string',
			L: 'minecraft:leather'
		}
	),
	event.shaped('quark:seed_pouch', [
		' W ',
		'LSL',
		' L '
		], {
			L: '#minecraft:logs',
			S: '#forge:seeds',
			W: '#minecraft:planks',
		}
	)
	
	//event.remove({output: 'projectred-transmission:neutral_bundled_wire'})
	event.shaped('5x projectred-transmission:neutral_bundled_wire', [
		' A ',
		'AAA',
		' A '
		], {
			A: '#projectred-transmission:insulated_wire'
		}
	)
//spacefix
	event.remove({output: 'boss_tools:block_of_steel'})
	event.remove({output: 'boss_tools:steel_ingot'})
	
	event.remove({output: 'mekanism:block_steel'})
	event.shapeless('mekanism:block_steel', '9x mekanism:ingot_steel')
	event.remove({ id: 'mekanism:processing/steel/ingot/from_block' })
	event.shapeless('9x mekanism:ingot_steel', 'mekanism:block_steel')
	event.shapeless('9x mekanism:ingot_steel', 'boss_tools:block_of_steel')
	event.shapeless('mekanism:ingot_steel', 'boss_tools:steel_ingot')
	
	event.remove({output: ['boss_tools:blast_furnace', 'boss_tools:compressor','boss_tools:hammer','boss_tools:iron_stick', 'boss_tools:iron_plate', 'boss_tools:desh_plate', 'boss_tools:wheel', 'boss_tools:solar_panel', 'boss_tools:rover_item', 'boss_tools:block_of_blue_iron_plating', 'boss_tools:block_of_iron_plating']})
	event.shaped('boss_tools:wheel', [
		'OOO',
		'OSO',
		'OOO'
		], {
			O: 'minecraft:obsidian',
			S: '#forge:ingots/steel'
		}
	)
	event.shaped('boss_tools:solar_panel', [
		'OOO',
		'CDC',
		'ABA'
		], {
			A: '#forge:plates/iron',
			B: 'boss_tools:battery',
			C: '#forge:ingots/steel',
			D: 'minecraft:lapis_lazuli',
			O: '#forge:glass'
		}
	)
	event.shaped('boss_tools:rover_item', [
		'CBC',
		'ADE',
		'CBC'
		], {
			A: '#forge:plates/iron',
			B: 'boss_tools:battery',
			C: 'boss_tools:wheel',
			D: '#forge:chests',
			E: 'boss_tools:barrel'
			
		}
	)
	event.shaped('boss_tools:block_of_iron_plating', [
		'ABA',
		'BAB',
		'ABA'
		], {
			A: 'minecraft:iron_ingot',
			B: 'minecraft:iron_nugget'
		}
	)
	event.shaped('boss_tools:block_of_iron_plating', [
		'ABA',
		'BAB',
		'ABA'
		], {
			A: 'minecraft:iron_ingot',
			B: 'minecraft:lapis_lazuli'
		}
	)
	event.shapeless('boss_tools:barrel_of_fuel', ['boss_tools:barrel','immersivepetroleum:gasoline_bucket'])
	//plates
	event.recipes.immersiveengineering.metal_press('boss_tools:compressed_steel', '#forge:storage_blocks/steel', 'immersiveengineering:mold_plate')
	event.recipes.immersiveengineering.metal_press('boss_tools:compressed_desh', 'jaopca:storage_blocks.desh', 'immersiveengineering:mold_plate')
	event.recipes.immersiveengineering.metal_press('boss_tools:compressed_silicon', 'jaopca:storage_blocks.silicon', 'immersiveengineering:mold_plate')
	
	//1.0.1 fixes
	event.remove({output: 'occultism:silver_ingot'})
	event.shapeless('immersiveengineering:ingot_silver', 'occultism:silver_ingot')
	
	event.remove({output: 'occultism:copper_ingot'})
	event.remove({output: 'tconstruct:copper_ingot'})
	event.remove({output: 'immersiveengineering:ingot_copper'})
	event.remove({output: 'tmechworks:copper_ingot'})
	event.remove({output: 'create:copper_ingot'})
	
	event.shapeless('mekanism:ingot_copper', 'occultism:copper_ingot')
	event.shapeless('mekanism:ingot_copper', 'tconstruct:copper_ingot')
	event.shapeless('mekanism:ingot_copper', 'immersiveengineering:ingot_copper')
	event.shapeless('mekanism:ingot_copper', 'tmechworks:copper_ingot')
	event.shapeless('mekanism:ingot_copper', 'create:copper_ingot')
	
	event.shapeless('mekanism:nugget_copper', 'occultism:copper_nugget')
	event.shapeless('mekanism:nugget_copper', 'create:copper_nugget')
	
	event.shapeless('immersiveengineering:ingot_aluminum', 'tmechworks:aluminum_ingot')
	event.shapeless('mekanism:ingot_lead', 'immersiveengineering:ingot_lead')
	event.shapeless('mekanism:ingot_uranium', 'immersiveengineering:ingot_uranium')
	
	event.remove({output: 'mekanism:robit'})
	event.shaped('mekanism:robit', [
		' S ',
		'BAB',
		'RCR'
		], {
			S: '#forge:ingots/steel',
			B: 'mekanism:energy_tablet',
			A: 'mekanism:alloy_atomic',
			R: 'mekanism:ingot_refined_obsidian',
			C: 'mekanism:steel_casing'
		}
	)
	event.remove({output: 'mekanism:laser_tractor_beam'})
	event.shaped('mekanism:laser_tractor_beam', [
		'C',
		'R'
		], {
			R: 'mekanism:laser_amplifier',
			C: 'mekanism:steel_casing'
		}
	)
	event.remove({output: 'mekanism:chemical_oxidizer'})
	event.shaped('mekanism:chemical_oxidizer', [
		'ABA',
		'CDE',
		'ABA'
		], {
			A: 'mekanism:alloy_infused',
			B: 'mekanism:basic_control_circuit',
			C: 'mekanism:steel_casing',
			D: 'mekanism:dynamic_tank',
			E: 'mekanism:basic_chemical_tank'
		}
	)
	event.remove({id: 'occultism:smelting/obsidian_from_dust'})
	event.remove({id: 'occultism:blasting/obsidian_from_dust'})

//end
})

onEvent('item.tags', event => {
	//1.0.1 fixes
	event.remove('forge:chests/electric', 'mekanism:personal_chest')
	event.remove('forge:chests/personal', 'mekanism:personal_chest')
	
	
	//others
	event.remove('forge:ingots/steel', 'boss_tools:steel_ingot')
	event.remove('forge:plates/iron', 'boss_tools:iron_plate')
	event.remove('forge:ingots/copper', ['tconstruct:copper_ingot', 'tmechworks:copper_ingot', 'occultism:copper_ingot', 'projectred-core:copper_ingot', 'immersiveengineering:ingot_copper', 'create:copper_ingot'])
	event.remove('forge:nuggets/copper', ['create:copper_nugget', 'tconstruct:copper_nugget', 'tmechworks:copper_nugget', 'occultism:copper_nugget'])
	event.remove('forge:ingots/silver', ['projectred-core:silver_ingot', 'occultism:silver_ingot'])
	event.remove('forge:ingots/silver', ['projectred-core:silver_ingot', 'occultism:silver_ingot'])
	event.remove('forge:ingots/uranium', 'immersiveengineering:ingot_uranium')
	event.remove('forge:ingots/aluminum', 'tmechworks:aluminum_ingot')
	event.remove('forge:rods/iron', 'boss_tools:iron_stick')
	event.remove('forge:rods/all_metal', 'boss_tools:iron_stick')
	
	event.remove('botania:petals/white', 'botania:white_mushroom')
	event.remove('botania:petals/orange', 'botania:orange_mushroom')
	event.remove('botania:petals/magenta', 'botania:magenta_mushroom')
	event.remove('botania:petals/light_blue', 'botania:light_blue_mushroom')
	event.remove('botania:petals/yellow', 'botania:yellow_mushroom')
	event.remove('botania:petals/lime', 'botania:lime_mushroom')
	event.remove('botania:petals/pink', 'botania:pink_mushroom')
	event.remove('botania:petals/gray', 'botania:gray_mushroom')
	event.remove('botania:petals/light_gray', 'botania:light_gray_mushroom')
	event.remove('botania:petals/cyan', 'botania:cyan_mushroom')
	event.remove('botania:petals/purple', 'botania:purple_mushroom')
	event.remove('botania:petals/blue', 'botania:blue_mushroom')
	event.remove('botania:petals/brown', 'botania:brown_mushroom')
	event.remove('botania:petals/green', 'botania:green_mushroom')
	event.remove('botania:petals/red', 'botania:red_mushroom')
	event.remove('botania:petals/black', 'botania:black_mushroom')
	//bundlefix
	event.add('projectred-transmission:bundled_wire','projectred-transmission:neutral_bundled_wire')
	event.add('projectred-transmission:framed_bundled_wire','projectred-transmission:neutral_framed_bundled_wire')
	//chiselfix
	event.add('chisel:marble', ['quark:marble_bricks', 'quark:chiseled_marble_bricks', 'quark:marble_pavement', 'quark:marble_pillar', 'quark:marble', 'quark:polished_marble', 'astralsorcery:marble_runed', 'astralsorcery:marble_raw', 'astralsorcery:marble_engraved', 'astralsorcery:marble_chiseled', 'astralsorcery:marble_bricks', 'astralsorcery:marble_arch'])
	event.add('chisel:basalt', ['minecraft:basalt', 'minecraft:polished_basalt', 'quark:smooth_basalt', 'quark:vanilla_basalt_bricks', 'quark:deepslate', 'quark:cobbled_deepslate', 'quark:polished_deepslate', 'quark:deepslate_bricks', 'quark:deepslate_tiles', 'quark:chiseled_deepslate', 'quark:cracked_deepslate_tiles', 'quark:cracked_deepslate_bricks'])
	event.add('chisel:limestone', ['quark:limestone_bricks', 'quark:chiseled_limestone_bricks', 'quark:limestone_pavement', 'quark:limestone_pillar', 'quark:limestone', 'quark:polished_limestone', 'create:limestone', 'create:limestone_cobblestone', 'create:polished_limestone', 'create:chiseled_weathered_limestone', 'create:mossy_weathered_limestone', 'create:overgrown_weathered_limestone', 'create:weathered_limestone_pillar', 'create:paved_weathered_limestone', 'create:layered_weathered_limestone', 'create:layered_limestone', 'create:chiseled_limestone', 'create:mossy_limestone', 'create:overgrown_limestone', 'create:weathered_limestone', 'create:weathered_limestone_cobblestone', 'create:polished_weathered_limestone', 'create:weathered_limestone_bricks', 'create:fancy_weathered_limestone_bricks'])
	event.add('forge:seeds', ['witchery_rewitched:belladonna_seeds', 'witchery_rewitched:garlic', 'witchery_rewitched:snowbell_seeds', 'witchery_rewitched:water_artichoke_seeds', 'witchery_rewitched:wolfsbane_seeds', 'witchery_rewitched:mandrake_seeds'])
	
})