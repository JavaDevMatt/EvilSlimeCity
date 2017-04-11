var game = new Phaser.Game(640, 376, Phaser.AUTO, 'gameDiv'),
    initState = require( './states/init' ),
    playState = require( './states/play' ),
    menuState = require( './states/menu' );

game.global = {
 gameLevel : 2,
 music : null,
 rainSound : null
}
//make the game a global object
window.game = game;
game.state.add('init', initState);
game.state.add('menu', menuState);
game.state.add('play', playState);

game.state.start('init');
