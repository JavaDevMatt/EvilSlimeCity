var game = new Phaser.Game(640, 376, Phaser.AUTO, 'gameDiv');
game.global = {
 gameLevel : 0,
 music : null,
 rainSound : null
}

game.state.add('init', initState);
game.state.add('menu', menuState);
game.state.add('play', playState);

game.state.start('init');