/* server-test
*
* /server/core/server.js - express configuration
*/

"use strict";

var express = require( "express" );

var oApp;

// instancie express
oApp = express();

// configure middlewares
oApp.use( require( "./express/middlewares/logs.js" ) );

// confiure engine
oApp.set( "views", __dirname + "/../views" );
oApp.set( "view engine", "jade" );

// configure static
oApp.use( express.static( __dirname + "/../assets" ) );

// configure routes
require( __dirname + "/../routes/main.js" ).init( oApp );

// listen port
oApp.listen( 12345 );
console.log( "Server is listening port 12345." );
