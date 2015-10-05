/* server-test
*
* /server.js - main file
*/

"use strict";

var express = require( "express" ),
    Github = require("github-api");

var oApp,
    github = new Github( {
        username: "swithFr",
        password: '***',
        auth: "basic"
    } ),
    user = github.getUser();

// instancie express
oApp = express();

// configure middlewares
oApp.use( function( oRequest, oResponse, fNext ) {
    console.log( "[" + oRequest.method + "] " + oRequest.url );
    fNext();
} );

// confiure engine
oApp.set( "views", __dirname + "/views" );
oApp.set( "view engine", "jade" );

// configure static
oApp.use( express.static( __dirname + "/assets" ) );

// configure routes
oApp.get( "/", function( oRequest, oResponse ) {

    oResponse.render( "page.jade", {
        page_title: "Title of my first express site",
        img_src: "d.jpg"
    } );

} );

oApp.get( "/github", function( oRequest, oResponse ) {

    var oCurrentRepo,
        aRepos = [],
        sRepoName ,
        sRepoUrl,
        iRepoForks,
        iRepoIssuesCount;

    user.userRepos( "SwithFr", function( err, repos ) {
        for (var k in repos) {
            oCurrentRepo = repos[ k ];
            sRepoName = oCurrentRepo.full_name;
            aRepos.push( [ sRepoName, oCurrentRepo.svn_url, oCurrentRepo.forks_count, oCurrentRepo.open_issues_count ] );
        }

        oResponse.render( "github.jade", {
            repos: aRepos
        } );
    } );

} );

oApp.get( "/elements/:id", function( oRequest, oResponse ) {

    oResponse.send( oRequest.params.id );

} );

// listen port
oApp.listen( 12345 );
console.log( "Server is listening port 12345." );
