ig.module( 'game.levels.test' )
.requires('impact.image','game.entities.npc','game.entities.npcrenwu','game.entities.player','game.entities.warp','game.entities.location')
.defines(function(){
LevelTest=/*JSON[*/{
	"entities": [
		{
			"type": "EntityNpc",
			"x": 416,
			"y": 84
		},
		{
			"type": "EntityNpcrenwu",
			"x": 572,
			"y": 80
		},
		{
			"type": "EntityPlayer",
			"x": 48,
			"y": 132
		},
		{
			"type": "EntityWarp",
			"x": 1120,
			"y": 152,
			"settings": {
				"size": {
					"x": 36,
					"y": 76
				},
				"location": "loc_b"
			}
		},
		{
			"type": "EntityLocation",
			"x": 1084,
			"y": 148,
			"settings": {
				"size": {
					"x": 36,
					"y": 80
				},
				"name": "loc_a"
			}
		}
	],
	"layer": [
		{
			"name": "background",
			"width": 3,
			"height": 1,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/map/map_1001@2x.jpg",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 400,
			"foreground": false,
			"data": [
				[1,2,3]
			]
		},
		{
			"name": "collision",
			"width": 30,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 40,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelTestResources=[new ig.Image('media/map/map_1001@2x.jpg')];
});