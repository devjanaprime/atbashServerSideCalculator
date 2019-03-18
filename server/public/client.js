$( document ).ready( readyNow );

var currentCalculation = {
    num1: 0,
    operation: '',
    num2: 0
}

function calculate(){
    console.log( 'in calculate' );
    // get user inputs, combine with selected operation, create an object
    currentCalculation.num1 = $( '#num1In' ).val();
    currentCalculation.num2 = $( '#num2In' ).val();
    console.log( 'currentCalculation:', currentCalculation );
    // send object to server via POST
    $.ajax({
        type: 'POST',
        url: '/calculate',
        data: currentCalculation
    }).then( function( response ){
        console.log( 'back from server with:', response );
    })
    // display answer
    // update history on DOM
} // end calculate

function clearInputs(){
    console.log( 'in clearInputs' );
    $( '#num1In' ).val( '' );
    $( '#num2In' ).val( '' );
    currentCalculation.operation = '';
} // end clearInputs

function readyNow(){
    $( '#equalsButton' ).on( 'click', calculate );
    $( '#clearButton' ).on( 'click', clearInputs );
    $( '.operationSelector' ).on( 'click', selectOperation );
} // end readyNow

function selectOperation(){
    console.log( 'in selectOperation', $( this ).text() );
    currentCalculation.operation = $( this ).text();
    console.log( 'currentOperation:', currentCalculation );
} // end selectOperation