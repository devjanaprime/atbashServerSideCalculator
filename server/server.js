// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// globals
const port = 5000;
let history = [];
let answer = 0;

// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end server up

app.post( '/calculate', ( req, res )=>{
    console.log( 'in /calculate POST', req.body );
    if( req.body.operation === '-'){
        answer = Number( req.body.num1 ) - Number( req.body.num2 );
    }
    else if( req.body.operation === '*'){
        answer = Number( req.body.num1 ) * Number( req.body.num2 );
    }
    else if( req.body.operation === '/'){
        answer = Number( req.body.num1 ) / Number( req.body.num2 );
    }
    else{
        answer = Number( req.body.num1 ) + Number( req.body.num2 );
    }
    // add this to history
    const tempObject = {
        num1: req.body.num1,
        operation: req.body.operation,
        num2: req.body.num2,
        answer: answer
    }
    history.push( tempObject );
    res.sendStatus( 201 );
}) // end POST calculate

app.get( '/calculate', ( req, res )=>{
    res.send( { answer: answer } );
}) // end GET calculate

app.get( '/history', ( req, res )=>{
    res.send( history );
}) // end GET history