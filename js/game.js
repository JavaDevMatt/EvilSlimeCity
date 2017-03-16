var game = new Phaser.Game(640, 376, Phaser.AUTO, 'gameDiv');

game.state.add('init', initState);
game.state.add('menu', menuState);

game.state.start('init');