/* server-test
*
* /server/controllers/github/repos/list.js - controller for list github repositories
*/

"use strict";

var Github = require( __dirname + "/../../../core/github/init.js" ).github;

var user = Github.getUser();

module.exports = function( oRequest, oResponse ) {

    var oCurrentRepo,
        aRepos = [],
        sRepoName,
        i;

    user.userRepos( "SwithFr", function( oError, oRepos ) {

        if ( oError ) {
            console.error( oError.message );
        }

        for ( i in oRepos ) {
            if ( oRepos.hasOwnProperty( i ) ) {
                oCurrentRepo = oRepos[ i ];
                sRepoName = oCurrentRepo.full_name;
                aRepos.push( [ sRepoName, oCurrentRepo.svn_url, oCurrentRepo.forks_count, oCurrentRepo.open_issues_count ] );
            }
        }

        oResponse.render( "github.jade", {
            "repos": aRepos
        } );

    } );

};
