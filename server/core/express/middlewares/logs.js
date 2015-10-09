/* server-test
*
* /core/express/middlewares/logs.js - logging express middleware
*/

/* module.exports ne marche que quand on a qu'une seule chose
* a exporter
*/

"use strict";

module.exports = function( oRequest, oResponse, fNext ) {
    console.log( "[" + oRequest.method + "] " + oRequest.url );
    fNext();
};
