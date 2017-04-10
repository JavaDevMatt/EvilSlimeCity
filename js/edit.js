var _ = require( 'lodash' );


var a, b;

window.refresh = function() {
    a = _.cloneDeep( window.level );
    document.querySelector( '#codeDiv' ).value = JSON.stringify( a , null, 4 );
}

window.enterEditMode = function() {
    refresh();
    window.editMode = true;
    document.querySelector( "#editModeUI" ).style.display = "block";
    document.querySelector( "#codeDiv" ).style.display = "block";
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
