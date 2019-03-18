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
        // display answer
        getAnswer();
        // update history on DOM
        updateHistory();
    })
} // end calculate

function clearInputs(){
    console.log( 'in clearInputs' );
    $( '#num1In' ).val( '' );
    $( '#num2In' ).val( '' );
    currentCalculation.operation = '';
} // end clearInputs

function getAnswer(){
    console.log( 'in getAnswer' );
    // make a get call to /calculate
    $.ajax({
        type: 'GET',
        url: '/calculate'
    }).then( function( response ){
        console.log( 'back from GET with:', response );
        // display answer on DOM in answerOut
        let el = $( '#answerOut' );
        el.empty();
        el.append( response.answer );
    })
} // end getAnswer

function readyNow(){
    $( '#equalsButton' ).on( 'click', calculate );
    $( '#clearButton' ).on( 'click', clearInputs );
    $( '.operationSelector' ).on( 'click', selectOperation );
    updateHistory();
} // end readyNow

function selectOperation(){
    console.log( 'in selectOperation', $( this ).text() );
    currentCalculation.operation = $( this ).text();
    console.log( 'currentOperation:', currentCalculation );
} // end selectOperation

function updateHistory(){
    console.log( 'in updateHistory' );
    $.ajax({
        type: 'GET',
        url: '/history'
    }).then( function( response ){
        console.log( 'back from GET history with:', response );
        let el = $( '#historyOut' );
        el.empty();
        // loop through response
        for( calc of response ){
            // for each calculation in array add a li to historyOut 
            el.append( `<li>${ calc.num1 } ${ calc.operation}
                ${ calc.num2} = ${ calc.answer}</li>`)
        }
    })
} // end updateHistory