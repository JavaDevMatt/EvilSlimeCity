module.exports = {
	world: {
		bounds: { x1: 0, y1:0, x2: 1705, y2: 376 },
		sprites: [
           { x: 0, y: 0, type: 'game-background'},
           { x: 640, y: 0, type: 'game-background'},
	       { x: 1280, y: 0, type: 'game-background'}
		]
	},
	platforms: [
		{x: 754, y: 172, type: 'tower1' },
		{x: 887, y: 300, type: 'platform' },
		{x: 1169, y: 300, type: 'platform' },
		{x: 1169, y: 272, type: 'tower1' },
		{x: 1310, y: 300, type: 'platform' },
		{x: 1451, y: 300, type: 'platform' },
		{x: 1410, y: 187, type: 'tower1' },
		{x: 185, y: 309, type: 'tower1' }, 
		{x: 400, y: 288, type: 'tower1' }
	],
	redSlimes: [
		{x: 1470, y: 10, type: 'monster2' },
		{x: 390, y: 70, type: 'monster2' }
	],
	slowFallers: [
		{x: 20, y: 282, type: 'faller' }
	],
	trampolines: [
		{x: 50, y: 270, type: 'trampoline' }, 
		{x: 950, y: 270, type: 'trampoline' },
		{x: 453, y: 261, type: 'trampoline'}
	],
	lava: [
		{x: 0, y: 332, type: 'lava2' },
		{x: 252, y: 332, type: 'lava2' },
		{x: 502, y: 332, type: 'lava2' },
		{x: 754, y: 332, type: 'lava2' },
		{x: 1000, y: 332, type: 'lava2' },
		{x: 1510, y: 352, type: 'lava2' }
	],
	arrows: [ {x: 1230, y: 240, type: 'arrow' } ],
	riders: [ {x: 490, y: 200, type: 'faller' } ]
}
