grunt-exists
============

Validates that file(s) exist.

* Version 0.0.1 has been validated to work with grunt 0.3.x

Sample Usage:

    module.exports = function (grunt) {
        // ...
        grunt.initConfig({
            // ...
            exists: {
                prod_files: [
                    'target/src/app/production.js',
                    'target/src/app/production.css',
                ]
            }
            // ...
        });
        // ...
    };
