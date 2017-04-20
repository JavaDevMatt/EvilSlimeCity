import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level05.js" );
let music1ChangeFlag = true;
let music2ChangeFlag = true;

let filter;
let fragmentSrc;

export class Level5 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );

		fragmentSrc = [
	        "precision mediump float;",

	        "uniform float     time;",
	        "uniform vec2     resolution;",

	        "#define PI 3.1415926535897932384626433832795",

	        "const float position = 0.0;",
	        "const float scale = 1.0;",
	        "const float intensity = 1.0;",

	        // "varying vec2 surfacePosition;",
	        // "vec2 pos;",

	        "float band(vec2 pos, float amplitude, float frequency) {",
	            "float wave = scale * amplitude * sin(1.0 * PI * frequency * pos.x + time) / 2.05;",
	            "float light = clamp(amplitude * frequency * 0.02, 0.001 + 0.001 / scale, 5.0) * scale / abs(wave - pos.y);",
	            "return light;",
	        "}",

	        "void main() {",

	            "vec3 color = vec3(1.5, 0.5, 10.0);",
	            "color = color == vec3(0.0)? vec3(10.5, 0.5, 1.0) : color;",
	            "vec2 pos = (gl_FragCoord.xy / resolution.xy);",
	            "pos.y += - 0.5;",
	            "float spectrum = 0.0;",
	            "const float lim = 28.0;",
	            "#define time time*0.037 + pos.x*10.",
	            "for(float i = 0.0; i < lim; i++){",
	                "spectrum += band(pos, 1.0*sin(time*0.1/PI), 1.0*sin(time*i/lim))/pow(lim, 0.25);",
	            "}",

	            "spectrum += band(pos, cos(10.7), 2.5);",
	            "spectrum += band(pos, 0.4, sin(2.0));",
	            "spectrum += band(pos, 0.05, 4.5);",
	            "spectrum += band(pos, 0.1, 7.0);",
	            "spectrum += band(pos, 0.1, 1.0);",

	            "gl_FragColor = vec4(color * spectrum, spectrum);",

	        "}"
    	];

    	filter = new Phaser.Filter(game, null, fragmentSrc);
    	filter.setResolution(800, 600);
	}

	addStartingText(){
    }

    handleSpecialLevelEvents(){
        if(music1ChangeFlag && gState.player.x > 200 ){
        	music1ChangeFlag = false;
        	game.global.music.stop();


        	var levelLabel = game.add.text(100, 110, 'Huh?',
                {font: '50px Courier', fill: '#fff'});
	        setTimeout(function(){
	                levelLabel.kill();
	        }, 3000);
        }


        if(music2ChangeFlag && gState.player.x > 700 ){
        	music2ChangeFlag = false;
        	game.global.music2.play();

        	var levelLabel = game.add.text(600, 110, 'be careful',
                {font: '30px Courier', fill: '#fff'});
	        setTimeout(function(){
	                levelLabel.kill();
	        }, 3000);

	        let sprite = game.add.sprite();
		    sprite.width = 800;
		    sprite.height = 600;

		    sprite.filters = [ filter ];
        }

        if(!music2ChangeFlag){
        	filter.update();
        }
     }
}
