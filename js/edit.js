var _ = require( 'lodash' );
import {GameState} from './gameState'
let gState = new GameState().state;

var a, b;


function editable( items ) {
	items.forEachAlive( function( item ) {
		item.inputEnabled = true;
		item.input.enableDrag(false, true);
		item.events.onDragStop.add(onDragStart, item);
		function onDragStart() {
			this.levelRef.x = this.body.x;
			this.levelRef.y = this.body.y;
			window.refresh();
		}
	}, this );
}

window.refresh = function() {
    a = _.cloneDeep( window.level );
    document.querySelector( '#codeDiv' ).value = JSON.stringify( a , null, 4 );
}

window.enterEditMode = function() {
    refresh();
    window.editMode = true;
    document.querySelector( "#editModeUI" ).style.display = "block";
    document.querySelector( "#codeDiv" ).style.display = "block";

    for ( var i in gState.envObjects ) {
        editable( gState.envObjects[ i ] );
    }
}
window.reload = function() { game.state.start( 'play' ); }

var editDom = document.querySelector( "#edit" );
var saveDom = document.querySelector( "#save" );
var lavelName = document.querySelector( "#levelName" );

editDom.addEventListener( 'click', function() {
    enterEditMode();
} );

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
