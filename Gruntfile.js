/* Gruntfile - tasks for grunt */

"use strict";

module.exports = function( grunt ) {

    // 1. load tasks
    grunt.loadNpmTasks( "grunt-eslint" );

    // 2. configure tasks
    grunt.initConfig( {
        "eslint": {
            "server": [
                "./server/**/*.js"
            ]
        }
    } );

    // 3. alias ( optional )
    grunt.registerTask( "default", [
        "eslint"
    ] );

};
