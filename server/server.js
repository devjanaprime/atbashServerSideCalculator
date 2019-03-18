// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// globals
const port = 5000;

// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end server up

app.post( '/calculate', ( req, res )=>{
    console.log( 'in /calculate POST', req.body );
    res.send( 'meow' );
}) // // end POST calculate