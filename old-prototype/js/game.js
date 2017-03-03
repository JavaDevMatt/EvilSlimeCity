var game = new Phaser.Game(640, 376, Phaser.AUTO, 'gameDiv');
var music;
var gameLevel = 1;

game.state.add('init', initState);
game.state.add('menu', menuState);
game.state.add('play', playState);

game.state.start('init');
