/* server-test
*
* /server/routes/main.js - main express routes declarations
*/

"use strict";

exports.init = function( oServerInstance ) {

    // Pages routes
    oServerInstance.get( "/", require( __dirname + "/../controllers/pages/home.js" ) );

    // Elements routes
    oServerInstance.get( "/elements/:id", require( __dirname + "/../controllers/elements/hello.js" ) );

    // GitHub routes
    oServerInstance.get( "/github", require( __dirname + "/../controllers/github/repos/list.js" ) );

};
