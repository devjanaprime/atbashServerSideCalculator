$( document ).ready( readyNow );

function calculate(){
    console.log( 'in calculate' );
} // end calculate

function clearInputs(){
    console.log( 'in clearInputs' );
    $( '#num1In' ).val( '' );
    $( '#num2In' ).val( '' );
} // end clearInputs

function readyNow(){
    $( '#equalsButton' ).on( 'click', calculate );
    $( '#clearButton' ).on( 'click', clearInputs );
    $( '.operationSelector' ).on( 'click', selectOperation );
} // end readyNow

function selectOperation(){
    console.log( 'in selectOperation' );
} // end selectOperation