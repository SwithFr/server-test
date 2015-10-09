/* server-test
*
* /controllers/pages/home.js - controller  for home page
*/

"use strict";

module.exports = function( oRequest, oResponse ) {
    oResponse.render( "page.jade", {
        "page_title": "Title of my first express site",
        "img_src": "d.jpg"
    } );
};
