var _ = require( 'lodash' );


var a, b;

window.refresh = function() {
    a = _.cloneDeep( window.level );
    document.querySelector( '#codeDiv' ).value = JSON.stringify( a , null, 4 );
}

window.enterEditMode = function() {
    refresh();
    window.editMode = true;
}

window.reload = function() { game.state.start( 'play' ); }
