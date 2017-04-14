var _ = require( 'lodash' );
import {GameState} from './gameState'
let gState = new GameState().state;

var a, b;


function editable( items ) {
	items.forEachAlive( function( item ) {
        editItem( item );
	}, this );
}

function editItem( item ) {
    item.inputEnabled = true;
    item.input.enableDrag(false, true);
    item.events.onDragStop.add(onDragStart, item);
    function onDragStart() {
        this.levelRef.x = this.body.x;
        this.levelRef.y = this.body.y;
        window.refresh();
    }
}

window.refresh = function() {
    a = _.cloneDeep( window.level );
    document.querySelector( '#editor-code' ).value = JSON.stringify( a , null, 4 );
}

window.enterEditMode = function() {
    refresh();
    window.editMode = true;
    document.querySelector( "#editor-side" ).style.display = "block";
    document.querySelector( "#editor-code" ).style.display = "block";

    for ( var i in gState.envObjects ) {
        editable( gState.envObjects[ i ] );
    }
}

function addObj( x, y, type, assetName, immovable ) {
    var tmpObj = gState.envObjects[ type ].create( x , y, assetName );
    tmpObj.body.immovable = immovable;
    tmpObj.levelRef = window.level[ type ][ window.level[ type ].push( {x:x, y:y, type: assetName } ) - 1 ];
    editItem( tmpObj );
	refresh();

}



var elementMap = {
	platform1: {
		belongsTo: 'platforms',
		asset: 'platform',
		immovable: true
	},
	platform2: {
		belongsTo: 'platforms',
		asset: 'platform2',
		immovable: true
	},
	tower: {
		belongsTo: 'platforms',
		asset: 'tower1',
		immovable: true
	},
	slime:  {
		belongsTo: 'redSlimes',
		asset: 'monster2',
		immovable: false
	},
	lava: {
		belongsTo: 'lava',
		asset: 'lava',
		immovable: true
	},
	lava2: {
		belongsTo: 'lava',
		asset: 'lava2',
		immovable: true
	},
	arrow: {
		belongsTo: 'arrows',
		asset: 'arrow',
		immovable: true
	},
	faller: {
		belongsTo: 'fallers',
		asset: 'faller',
		immovable: true
	},
	trampoline: {
		belongsTo: 'trampolines',
		asset: 'trampoline',
		immovable: true
	},
	tnt: {
		belongsTo: 'tnt',
		asset: 'tnt',
		immovable: true
	}
}


window.addElementClick = function( event ) {
	var canvas = document.querySelector( 'canvas' );
	var body = document.querySelector( 'body' );
	var type = event.target.dataset.element;
	body.style.cursor = 'crosshair';
	function addElementAfterClick(){
		body.style.cursor = '';
		addObj(
			game.input.activePointer.worldX,
			game.input.activePointer.worldY,
			elementMap[ type ].belongsTo,
			elementMap[ type ].asset,
			elementMap[ type ].immovable
		);
		canvas.removeEventListener( 'click', addElementAfterClick );
	}
	canvas.addEventListener( 'click', addElementAfterClick );
}


window.reload = function() { game.state.start( 'play' ); }

var saveDom = document.querySelector( "#save" );
var lavelName = document.querySelector( "#levelName" );



saveDom.addEventListener( 'click', function() {
var xhr = new XMLHttpRequest();

 // send the collected data as JSON
 var data = {
    path: levelName.value,
    content: window.level
 }

 data = JSON.stringify( data );

 xhr.open( 'POST', 'http://localhost:8888', true);
 xhr.send( data );

 xhr.onloadend = function ( msg ) {
   console.log( msg );
 };
} );
