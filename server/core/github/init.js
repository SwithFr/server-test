/* server-test
*
* /server/core/github/init.js - init github
*/

"use strict";

var Github = require( "github-api" );

exports.github = new Github( {
    "username": "swithFr",
    "password": "********",
    "auth": "basic"
} );
