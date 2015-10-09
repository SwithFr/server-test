/* server-test
*
* /controllers/elements/hello.js - controller  for elements hello page
*/

"use strict";

module.exports = function( oRequest, oResponse ) {

    oResponse.send( "Hello, elements " + oRequest.params.id );

};
