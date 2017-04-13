 module.exports = {
	world: {
		bounds: { x1: 0, y1:0, x2: 640, y2: 376 },
		sprites: [
		   { x: 0, y: 0, type: 'game-background'}
		]
	},
	platforms: [
		{x: 0, y: 112, type: 'tower1' },
		{x: 1, y: 300, type: 'platform' },
		{x: 421, y: 289, type: 'faller' }
	],
	redSlimes: [
        {x: 350, y: 10, type: 'monster2' },
        {x: 560, y: 10, type: 'monster2' }
	],
	fallers: [
	],
	slowFallers: [],
	trampolines: [  {x: 160, y:10, type: 'trampoline'} ],
	lava: [
		{x: 142, y: 332, type: 'lava' },
		{x: 198, y: 332, type: 'lava' },
		{x: 254, y: 332, type: 'lava2' },
		{x: 506, y: 332, type: 'lava2' }
	],
	tnt: [ { x:360, y:150, type: 'tnt' } ],
	switchFallers: [
		{x: 136, y: 242, type: 'faller' },
		{x: 330, y: 112, type: 'faller' },
		{x: 208, y: 242, type: 'platform' },
		{x: 349, y: 289, type: 'faller' },
		{x: 493, y: 289, type: 'faller' },
		{x: 565, y: 289, type: 'faller' },
		{x: 530, y: 32, type: 'tower1' }
	],
	riders: []
}
