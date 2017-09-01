"use strict";

module.exports = function(grunt) {
    //require('load-grunt-tasks')(grunt);
    // Project configuration.

    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

        //uglify settings
        uglify: {
            build: {
                src: 'release/js/*.js',
                dest: 'release/js/main.min.js'
            }
        },

        //cssmin settings
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'release/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'release/css/',
                    ext: '.min.css'
                }]
            }
        },
        
        //sass settings
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'release/css/style.css': 'src/sass/style.scss'
                }
            }
        },

        //typescript settings
        typescript: {
            base: {
                src: ['src/ts/**/*.ts'],
                dest: 'release/js/',
                options: {
                    module: 'amd', //or commonjs 
                    target: 'es5', //or es3 
                    sourceMap: true,
                    declaration: false
                }
            }
        },

        //clean settings, used to do a full build everytime in order to protect agianst copying issues
        clean: {
            build : ['release/*']
        },

        //copy over html files
        copy:{
            main:{
                files:[
                    //copy html files
                    {expand: true, cwd:'src/', src: ['*.html'], dest: 'release/', filter: 'isFile'},

                    //copy js files
                    {expand: true, cwd:'src/js', src: ['*.js'], dest: 'release/js', filter: 'isFile'}
                ]
            }
        },

        //watch task settings
        watch: {
            scripts: {
                files: ['src/**/*.js','src/**/*.scss','src/**/*.html'],
                tasks: ['build'],
                options: {
                  spawn: false,
                },
            },
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-sass');

    // Default task(s).
    grunt.registerTask('build', ['clean','copy','typescript','uglify','sass','cssmin']);
};